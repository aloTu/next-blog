import classNames from 'classnames'
import { Fragment } from 'react'
import Link from 'next/link'

type ListingProps = {
  posts: {
    slug: string
    title: string
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
    title: string
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
        href={post.slug}
        className="text-[1.25rem] md:text-[1.5rem] hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-secondary mt-1 text-[1rem] md:text-[1.25rem]">
        <time>{post.date}</time>
        {post.tags && showTags && (
          <Fragment>
            {` —— `}
            {/* <ItemTags tags={post.tags} /> */}
            post.tags.name
          </Fragment>
        )}
      </p>
    </div>
  )
}

export default Listing
