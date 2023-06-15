import * as React from 'react'
import { preToCodeBlock } from '@/utils/themes-utils'
import Code from './code'
import { H2, H3, H4, BlockQuote } from './heading'

const MdxComponents = {
  img: (props: any) => (
    <span className="w-full flex justify-center my-16">
      <img sizes="100vw" {...props} />
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
  //   background-color: var(--theme-ui-colors-muted);
  // color: var(--theme-ui-colors-heading);
  // padding-left: 0.5rem;
  // padding-right: 0.5rem;
  // padding-top: 0.25rem;
  // padding-bottom: 0.25rem;
  // border-radius: 4px;
  // font-size: 0.95em;
  code: (props: any) => (
    <code
      className="bg-muted text-heading pl-2 pr-2 pt-1 pb-1 text-sm/none rounded"
      {...props}
    />
  ),
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps)
    console.log('props', props)
    // if there's a codeString and some props, we passed the test
    return <Code {...props} />
    // if (props) {
    //   return <Code {...props} />
    // }
    // it's possible to have a pre without a code in it
    // return <pre {...preProps} />
  },
}

export default MdxComponents
