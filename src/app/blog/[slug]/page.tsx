import { MDXRemote } from 'next-mdx-remote/rsc'
import MdxComponents from '@/app/mdx-component'

import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

export const metadata = {
  title: 'Detail',
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { data: query } = await fetchAPI<
    IStrapData<{
      title: string
      description: string
      content: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }>[]
  >(`/blogs`, {
    filters: { slug: { $eqi: params.slug } },
  })

  if (query.length !== 1) {
    throw new Error('未查询到数据')
  }
  const data = query[0].attributes
  console.log('hhh', data)
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={data.content} components={MdxComponents} />
    </main>
  )
}

export async function generateStaticParams() {
  const { data } = await fetchAPI<
    IStrapData<{
      slug: string
    }>[]
  >('/blogs', {
    fields: ['slug'],
    sort: ['updatedAt:desc'],
    pagination: {
      start: 0,
      limit: 10,
    },
  })

  return data.map((item) => ({
    slug: item.attributes.slug,
  }))
}
