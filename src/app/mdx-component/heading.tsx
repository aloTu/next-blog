import classNames from 'classnames'
const H1 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  // text-rendering: optimizeLegibility;
  // -webkit-font-smoothing: antialiased;
  // font-weight: 700;
  <h1
    style={{
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    }}
    className={classNames(
      'mt-8 mb-1 min-w-0 text-heading text-3xl/tight font-bold sm:text-4xl/tight xl:text-5xl/tight',
      props.className
    )}
    {...props}
  />
)

const H2 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <h2
    style={{
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    }}
    className={classNames(
      'mt-8 mb-1 text-heading text-2xl/tight font-bold sm:text-3xl/tight xl:text-4xl/tight',
      props.className
    )}
    {...props}
  />
)

const H3 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <h3
    style={{
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    }}
    className={classNames(
      'mt-8 mb-1 text-heading text-xl/tight font-bold sm:text-2xl/tight xl:text-3xl/tight',
      props.className
    )}
    {...props}
  />
)

const H4 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <h4
    style={{
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    }}
    className={classNames(
      'mt-8 mb-1 text-heading text-2xl/tight font-bold sm:text-3xl/tight xl:text-4xl/tight',
      props.className
    )}
    {...props}
  />
)

const BlockQuote = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
) => (
  <blockquote
    className={classNames(
      'border-l-4 border-solid border-primary pl-8 italic',
      props.className
    )}
    {...props}
  />
)

export { H1, H2, H3, H4, BlockQuote }
