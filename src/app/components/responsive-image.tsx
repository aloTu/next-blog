import Image from 'next/image'
import type { ImageProps } from 'next/image'
const ResponsiveImage = (props: ImageProps) => {
  /* eslint jsx-a11y/alt-text:0 */
  return (
    <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...props} />
  )
}

export default ResponsiveImage
