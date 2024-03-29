'use client'
import { Fragment, useContext } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import classNames from 'classnames'
import {
  calculateLinesToHighlight,
  getLanguage,
  GetLanguageInput,
} from '@/utils/themes-utils'
import Copy from './copy'
import './code.css'
import { ThemeContext } from '@/app/theme-provider'

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
  const { mode } = useContext(ThemeContext)
  const isDark = mode === 'dark'

  const language = getLanguage(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(highlight)
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers

  return (
    <Highlight
      code={codeString}
      language={language}
      theme={isDark ? themes.vsDark : themes.palenight}
    >
      {({ className, tokens, getLineProps, getTokenProps }: any) => (
        <Fragment>
          <div className="next-highlight" data-language={language}>
            {title && (
              <div className="code-title">
                <div>{title}</div>
              </div>
            )}
            <pre
              className={classNames(className, 'code-wrap')}
              data-linenumber={shouldShowLineNumbers}
            >
              {showCopyButton && <Copy content={codeString} fileName={title} />}
              <code className={`code-content language-${language}`}>
                {tokens.map((line: any, i: any) => {
                  const { key, ...lineProps } = getLineProps({ line, key: i })

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`
                    lineProps.style = {
                      ...lineProps.style,
                      backgroundColor: `var(${'--highlightLineBg'})`,
                    }
                  }

                  return (
                    <div key={key} {...lineProps}>
                      {shouldShowLineNumbers && (
                        <span className="line-number-style">{i + 1}</span>
                      )}
                      {line.map((token: any, index: number) => {
                        return (
                          <span
                            key={key + index}
                            {...getTokenProps({ token, index })}
                          />
                        )
                      })}
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
