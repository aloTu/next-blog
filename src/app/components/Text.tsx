import classNames from 'classnames'

const Text = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => <span {...props} className={classNames('mb-16', props.className)} />

export default Text
