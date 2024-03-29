import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeMetaAsAttributes from '@/utils/rehype-meta-as-attributes'

import MdxComponents from '@/app/mdx-component'

import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
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
  const data = query[0].attributes

  return {
    title: data.title,
    description: data.description,
  }
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
  const { content, frontmatter } = await compileMDX<{}>({
    source: data.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeMetaAsAttributes],
        format: 'mdx',
      },
    },
    components: MdxComponents,
  })
  // {/* @ts-expect-error Async Server Component */}
  // <MDXRemote source={...source} components={MdxComponents} />
  return <main>{content}</main>
}

export async function generateStaticParams() {
  const { data } = await fetchAPI<
    IStrapData<{
      slug: string
    }>[]
  >('/blogs', {
    fields: ['slug'],
    sort: ['updatedAt:desc'],
  })

  return data.map((item) => ({
    slug: item.attributes.slug,
  }))
}
