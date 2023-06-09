'use client'
import { useState } from 'react'

import copyToClipboard from '@/utils/copy-to-clipboard'

const visuallyHidden = {
  border: 0,
  clip: `rect(0, 0, 0, 0)`,
  height: `1px`,
  margin: `-1px`,
  overflow: `hidden`,
  padding: 0,
  position: `absolute`,
  whiteSpace: `nowrap`,
  width: `1px`,
}

const a = 'bg-base border-none text-base cursor-pointer text-sm'
const copyButton = {
  backgroundColor: `background`,
  border: `none`,
  color: `text`,
  cursor: `pointer`,
  fontSize: [`14px`, `14px`, `16px`],
  fontFamily: `body`,
  letterSpacing: `0.025rem`,
  transition: `all 0.3s ease-in-out`,
  '&[disabled]': {
    cursor: `not-allowed`,
  },
  ':not([disabled]):hover': {
    bg: `primary`,
    color: `white`,
  },
  position: `absolute`,
  right: 0,
  zIndex: 1,
  borderRadius: `0 0 0 0.25rem`,
  padding: `0.25rem 0.6rem`,
}

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
      className="code-copy-button"
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
