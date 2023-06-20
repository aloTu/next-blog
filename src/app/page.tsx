import Link from 'next/link'
import Title from '@/app/ui/title'
import Listing from '@/app/ui/listing'
import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

export default async function Home() {
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
      limit: 3,
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
      <section className="mb-16 sm:mb-32 md:mb-64">
        <span className="m-0 min-w-0 text-heading font-bold text-5xl/relaxed">
          Hi.
        </span>
        这里做些学习总结记录
      </section>
      <Title text="Latest Posts">
        <Link
          href="/blog"
          className="text-base hover:underline hover:text-heading"
        >
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </main>
  )
}
