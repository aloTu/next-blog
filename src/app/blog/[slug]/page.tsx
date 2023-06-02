import kebabCase from 'lodash.kebabcase'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { H1, H2, Text, ResponsiveImage } from '@/app/components'

const components = {
  // img: ResponsiveImage,
  h1: H1,
  h2: H2,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
}

import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

export const metadata = {
  title: 'Detail',
}

async function getCurrentId(slug: string) {
  const { data: list } = await fetchAPI<
    IStrapData<{
      title: string
    }>[]
  >('/articles', {
    fields: ['title'],
    sort: ['updatedAt:desc'],
    pagination: {
      start: 0,
      limit: 10,
    },
  })
  const current = list.find(
    (item) => slug === encodeURI(kebabCase(item.attributes.title))
  )
  if (!current?.id) {
    throw new Error('获取id失败')
  }
  return current.id
}

export default async function Post({ params }: { params: { slug: string } }) {
  const curId = await getCurrentId(params.slug)
  const { data } = await fetchAPI<
    IStrapData<{
      title: string
      description: string
      content: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }>
  >(`/articles/${curId}`)
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={data.attributes.content} components={components} />
    </main>
  )
}

export async function generateStaticParams() {
  const { data } = await fetchAPI<
    IStrapData<{
      title: string
    }>[]
  >('/articles', {
    fields: ['title'],
    sort: ['updatedAt:desc'],
    pagination: {
      start: 0,
      limit: 10,
    },
  })

  return data.map((item) => ({
    slug: kebabCase(item.attributes.title),
  }))
}
