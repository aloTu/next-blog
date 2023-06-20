import classNames from 'classnames'
import { Fragment } from 'react'
import Link from 'next/link'
import ItemTags from '@/app/ui/item-tags'

type ListingProps = {
  posts: {
    slug: string
    name: string
    date: string
    description: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  className?: string
  showTags?: boolean
}

const Listing = ({ posts, className = ``, showTags = true }: ListingProps) => (
  <section className={classNames('mb-16 sm:mb-32 md:mb-64', className)}>
    {posts.map((post) => (
      <BlogListItem key={post.slug} post={post} showTags={showTags} />
    ))}
  </section>
)

type BlogListItemProps = {
  post: {
    slug: string
    name: string
    date: string
    description: string
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

function BlogListItem({ post, showTags = true }: BlogListItemProps) {
  return (
    <div className="mb-8">
      <Link
        href={`/blog/${post.slug}`}
        className="text-[1.25rem] md:text-[1.5rem] hover:underline"
      >
        {post.name}
      </Link>
      <p className="text-secondary mt-1 text-[1rem] md:text-[1.25rem]">
        <time>{post.date}</time>
        {post.tags?.length && showTags && (
          <Fragment>
            {` —— `}
            <ItemTags tags={post.tags} />
          </Fragment>
        )}
      </p>
    </div>
  )
}

export default Listing
