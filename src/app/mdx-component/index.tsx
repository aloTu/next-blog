import * as React from 'react'
import { preToCodeBlock } from '@/utils/themes-utils'
import Code from './code'
import Image from 'next/image'
import { H2, H3, BlockQuote } from './heading'

const MdxComponents = {
  img: (props: any) => (
    <span className="w-full flex justify-center my-16 relative h-96">
      <Image
        className="object-contain"
        {...props}
        src={props?.src}
        alt={props?.alt}
        fill={true}
      />
    </span>
  ),
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  blockquote: (props: any) => <BlockQuote {...props} />,
  p: (props: any) => <p className="block mt-4 mb-4" {...props} />,
  a: (props: any) => <a className="text-primary" {...props} />,
  ol: (props: any) => (
    <ol className="list-decimal pl-10 block mt-4 mb-4" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-muted text-heading pl-2 pr-2 pt-1 pb-1 text-sm/none rounded"
      {...props}
    />
  ),
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

export default MdxComponents
