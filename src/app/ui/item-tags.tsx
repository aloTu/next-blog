import { Fragment } from 'react'
import Link from 'next/link'

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[]
}

const ItemTags = ({ tags }: TagsProps) => {
  return (
    <Fragment>
      {tags.map((tag, i) => (
        <Fragment key={tag.slug}>
          {!!i && `, `}
          <Link href={`/tags/${tag.slug}`} className="hover:underline">
            {tag.name}
          </Link>
        </Fragment>
      ))}
    </Fragment>
  )
}

export default ItemTags
