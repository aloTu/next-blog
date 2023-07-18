'use client'
import { useState } from 'react'

import copyToClipboard from '@/utils/copy-to-clipboard'

const delay = (duration: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration)
  })

type CopyProps = {
  content: string
  duration?: number
  fileName?: string
  trim?: boolean
}

const Copy = ({
  content,
  duration = 5000,
  fileName = ``,
  trim = false,
}: CopyProps) => {
  const [copied, setCopied] = useState(false)

  const label = copied
    ? `${fileName ? `${fileName} ` : ``}copied to clipboard`
    : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`

  return (
    <button
      type="button"
      name={label}
      disabled={copied}
      className="bg-background border-none cursor-pointer text-sm absolute right-0 py-1 px-3 tracking-wide rounded-br hover:bg-primary hover:text-light"
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content)
        setCopied(true)
        await delay(duration)
        setCopied(false)
      }}
    >
      {copied ? `Copied` : `Copy`}
      <span
        aria-roledescription="status"
        className="absolute -m-px overflow-hidden border-0 h-px w-px whitespace-nowrap"
      >
        {label}
      </span>
    </button>
  )
}

export default Copy
