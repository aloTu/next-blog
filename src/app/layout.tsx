import './globals.css'
import ThemeProvider from './theme-provider'
import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'
import { fetchAPI } from '@/lib/api'
import type { IStrapData } from '@/lib/api'

export async function generateMetadata() {
  const { data } = await fetchAPI<
    IStrapData<{
      siteTitle: string
      siteTitleAlt: string
      siteHeadline: string
      siteDescription: string
      author: string
      siteUrl: string
    }>
  >('/global')

  return {
    title: {
      template: '%s | ' + data.attributes.siteTitle,
      default: data.attributes.siteTitleAlt,
    },
    description: data.attributes.siteDescription,
    authors: [{ name: data.attributes.author, url: data.attributes.siteUrl }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="32x32" />
      <body className="p-4 sm:p-8  max-w-5xl mx-auto text-text bg-red-500 font-normal text-base/relaxed md:text-xl/relaxed">
        <ThemeProvider>
          {/* @ts-expect-error Async Server Component */}
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
