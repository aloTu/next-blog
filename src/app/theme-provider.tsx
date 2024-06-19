'use client'

import { createContext, useState, useEffect, useLayoutEffect } from 'react'

const localKey = 'theme'

const getStorage = () => {
  const value = localStorage.getItem(localKey)
  return value ? value : getThemeMode()
}

const setStorage = (value: string) => {
  localStorage.removeItem(localKey)
  localStorage.setItem(localKey, value)
}

const getThemeMode = () => {
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

interface ThemeContextType {
  mode: string
  switchMode: (value: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: '',
  switchMode: () => {},
})

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState('')

  useEffect(() => {
    const changeColorMode = () => {
      const color = getThemeMode()
      switchModeHandler(color)
    }

    const matchMediaHandler = window.matchMedia('(prefers-color-scheme: light)')
    matchMediaHandler.addEventListener('change', changeColorMode)

    switchModeHandler(getStorage())

    return () =>
      matchMediaHandler.removeEventListener('change', changeColorMode)
  }, [])

  const switchModeHandler = (value: string) => {
    const doc = document.firstElementChild

    if (doc) {
      doc.setAttribute('data-mode', value)
      setStorage(value)
      setMode(value)
    }
  }

  const contextValue: ThemeContextType = {
    mode: mode,
    switchMode: switchModeHandler,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
