import classNames from 'classnames'
const H1 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <h1
    {...props}
    className={classNames('mb-16 sm:mb-32 md:mb-64', props.className)}
  />
)

const H2 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <h2
    {...props}
    className={classNames('mb-16 sm:mb-32 md:mb-64', props.className)}
  />
)

export { H1, H2 }
