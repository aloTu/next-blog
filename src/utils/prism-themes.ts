import { themes } from 'prism-react-renderer'
import { themeWithCssVariables } from './prism-utils'

const { theme: lightTheme, variables: lightThemeVars } = themeWithCssVariables(
  themes.github
)
const { theme: darkTheme, variables: darkThemeVars } = themeWithCssVariables(
  themes.vsDark
)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
