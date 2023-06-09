import * as React from 'react'
import { preToCodeBlock } from '@/utils/themes-utils'
import Code from './code'
import Text from './text'

const MdxComponents = {
  Text: (props: any) => <Text {...props} />,
  // img: ResponsiveImage,
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
