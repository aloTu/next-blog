'use client'
// import { useColorMode } from 'theme-ui'
import { Fragment } from 'react'
import { Highlight } from 'prism-react-renderer'
import {
  calculateLinesToHighlight,
  getLanguage,
  GetLanguageInput,
} from '@/utils/themes-utils'
import Copy from './copy'

type CodeProps = {
  codeString: string
  withLineNumbers?: boolean
  highlight?: string
  title?: string
  className: GetLanguageInput
}

const config = {
  showLineNumbers: true,
  showCopyButton: true,
}

const Code = ({
  codeString,
  withLineNumbers = false,
  title = ``,
  className: blockClassName,
  highlight = ``,
}: CodeProps) => {
  const { showLineNumbers, showCopyButton } = config
  // const [colorMode] = useColorMode<'light' | 'dark'>()
  const colorMode = 'dark'
  const isDark = colorMode === `dark`

  const language = getLanguage(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(highlight)
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers

  return (
    <Highlight
      code={codeString}
      language={language}
      // theme={isDark ? darkTheme : lightTheme}
    >
      {({ className, tokens, getLineProps, getTokenProps }: any) => (
        <Fragment>
          <div className="gatsby-highlight" data-language={language}>
            {title && (
              <div className="code-title">
                <div>{title}</div>
              </div>
            )}
            <pre className={className} data-linenumber={shouldShowLineNumbers}>
              {showCopyButton && <Copy content={codeString} fileName={title} />}
              <code className={`code-content language-${language}`}>
                {tokens.map((line: any, i: any) => {
                  const lineProps = getLineProps({ line, key: i })

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`
                    lineProps.style = {
                      ...lineProps.style,
                      backgroundColor: `var(--theme-ui-colors-highlightLineBg)`,
                    }
                  }

                  return (
                    <div {...lineProps} key={i}>
                      {shouldShowLineNumbers && (
                        <span className="line-number-style">{i + 1}</span>
                      )}
                      {line.map((token: any, key: any) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  )
                })}
              </code>
            </pre>
          </div>
        </Fragment>
      )}
    </Highlight>
  )
}

export default Code
