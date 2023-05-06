type TitleProps = {
  children: React.ReactNode
  text: string
}

const Title = ({ text, children }: TitleProps) => (
  <div className="justify-between items-center border-b border-solid border-divide pb-4 mb-8 flex flex-wrap">
    <h2 className="font-medium leading-tight text-heading text-[1.5rem] sm:text-[1.875rem]">
      {text}
    </h2>
    {children ? <div className="text-secondary">{children}</div> : null}
  </div>
)

export default Title
