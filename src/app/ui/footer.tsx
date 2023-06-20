import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between mt-32 text-base text-secondary flex-col border-t border-solid border-divide pt-4 md:flex-row">
      <div>&copy; {new Date().getFullYear()} by alo. All rights reserved.</div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://beian.miit.gov.cn"
          className="hover:underline hover:text-heading"
        >
          鄂ICP备2021005434号
        </Link>
      </div>
    </footer>
  )
}

export default Footer
