import { fetchAPI } from '@/lib/api'
import Link from 'next/link'
import type { IStrapData } from '@/lib/api'
import { H1 } from '@/app/mdx-component/heading'

export default async function Tags() {
  const { data } = await fetchAPI<
    IStrapData<{
      name: string
      slug: string
      blogs: {
        data: IStrapData<{ title: string }>[]
      }
    }>[]
  >('/tags', {
    fields: ['name', 'slug'],
    populate: {
      blogs: { fields: 'slug' },
    },
  })

  const tags = data.map((tag) => ({
    name: tag.attributes.name,
    slug: tag.attributes.slug,
    totalCount: tag.attributes.blogs.data.length,
  }))
  return (
    <main>
      <H1>Tags</H1>
      <div className="mt-8 sm:mt-16">
        {tags.map((tag) => (
          <div key={tag.slug} className="mb-1 flex items-center md:mb-2">
            <Link
              href={`/tags/${tag.slug}`}
              className="text-text text-base mr-2 hover:underline sm:text-xl/relaxed md:text-2xl/relaxed "
            >
              {tag.name}{' '}
              <span className="text-secondary">({tag.totalCount})</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
