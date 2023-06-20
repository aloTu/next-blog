import Link from 'next/link'
import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'
import Listing from '@/app/ui/listing'

export const metadata = {
  title: 'Detail',
}

export default async function Tag({ params }: { params: { slug: string } }) {
  const { data } = await fetchAPI<
    IStrapData<{
      name: string
      blogs: {
        data: IStrapData<{
          name: string
          slug: string
          description: string
          createdAt: string
          tags: { data: IStrapData<{ name: string; slug: string }>[] }
        }>[]
      }
    }>[]
  >('/tags', {
    filters: { slug: { $eq: params.slug } },
    fields: 'name',
    populate: {
      blogs: {
        fields: ['slug', 'description', 'name', 'createdAt'],
        populate: { tags: { fields: ['name', 'slug'] } },
      },
    },
  })

  const name = data[0]?.attributes?.name
  const posts = data[0].attributes.blogs.data.map((item) => ({
    name: item.attributes.name,
    slug: item.attributes.slug,
    description: item.attributes.description,
    date: new Date(item.attributes.createdAt).toLocaleDateString('zh-cn'),
    tags: item.attributes.tags.data.map((tag) => ({ ...tag.attributes })),
  }))

  return (
    <main>
      <div className="flex flex-wrap  items-center justify-between">
        <h1 className="my-2 font-bold leading-tight text-[1.875rem] sm:text-[2.25rem] lg:text-[3rem]">
          {name}
        </h1>
        <Link
          className="text-secondary text-base hover:underline hover:text-heading"
          href="/tags"
        >
          View all tags
        </Link>
      </div>

      <Listing
        className="mt-8 mb-16 sm:mt-16 sm:mb-32 md:mb-64"
        posts={posts}
      />
    </main>
  )
}

export async function generateStaticParams() {
  const { data } = await fetchAPI<
    IStrapData<{
      slug: string
    }>[]
  >('/tags', {
    fields: ['slug'],
  })

  return data.map((item) => ({
    slug: item.attributes.slug,
  }))
}
