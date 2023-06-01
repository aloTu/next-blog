import Image from 'next/image'
import type { ImageProps } from 'next/image'
const ResponsiveImage = (props: ImageProps) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
)

export default ResponsiveImage
