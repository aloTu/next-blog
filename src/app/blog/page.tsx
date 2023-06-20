import Link from 'next/link'
import Listing from '@/app/ui/listing'
import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

export const metadata = {
  title: 'Blog',
}

export default async function Blog() {
  const { data } = await fetchAPI<
    IStrapData<{
      name: string
      slug: string
      description: string
      createdAt: string
      updatedAt: string
    }>[]
  >('/blogs', {
    fields: ['name', 'slug', 'description', 'createdAt', 'updatedAt'],
    sort: ['updatedAt:desc'],
    pagination: {
      start: 0,
      limit: 10,
    },
  })

  const posts = data.map((item) => ({
    slug: item.attributes.slug,
    name: item.attributes.name,
    date: new Date(item.attributes.updatedAt).toLocaleDateString('zh-cn'),
    description: item.attributes.description,
  }))

  return (
    <main>
      <div className="flex flex-wrap  items-center justify-between">
        <h1 className="my-2 font-bold leading-tight text-[1.875rem] sm:text-[2.25rem] lg:text-[3rem]">
          Blog
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
