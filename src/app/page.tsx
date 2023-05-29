import Link from 'next/link'
import Title from '@/app/ui/title'
import Listing from '@/app/ui/listing'
import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'
import kebabCase from 'lodash.kebabcase'
import Hero from '@/app/info/hero.mdx'

export default async function Home() {
  const { data } = await fetchAPI<
    IStrapData<{
      title: string
      description: string
      createdAt: string
      updatedAt: string
    }>[]
  >('/articles', {
    fields: ['title', 'description', 'createdAt', 'updatedAt'],
    sort: ['updatedAt:desc'],
    pagination: {
      start: 0,
      limit: 3,
    },
  })

  const posts = data.map((item) => ({
    slug: kebabCase(item.attributes.title),
    title: item.attributes.title,
    date: new Date(item.attributes.updatedAt).toLocaleDateString('zh-cn'),
    description: item.attributes.description,
  }))

  return (
    <main>
      <section className="mb-16 sm:mb-32 md:mb-64">
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link href="/blog" className="hover:underline hover:text-heading">
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </main>
  )
}
