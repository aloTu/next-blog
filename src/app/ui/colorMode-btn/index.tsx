'use client'
import { useContext } from 'react'
// CSS Styles adapted from: https://codepen.io/aaroniker/pen/KGpXZo
import styles from './index.module.css'

import { ThemeContext } from '@/app/theme-provider'

const ColorModeBtn = () => {
  const { mode, switchMode } = useContext(ThemeContext)

  const isDark = mode === 'dark'

  return (
    <button
      // className="w-10 h-6 flex items-center justify-center cursor-pointer p-0"
      className={
        isDark ? styles.toggleBtn : styles.light + ' ' + styles.toggleBtn
      }
      onClick={() => {
        const next = isDark ? `light` : `dark`
        switchMode(next)
      }}
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    >
      <div className={styles.toggleIcon}></div>
    </button>
  )
}

export default ColorModeBtn
