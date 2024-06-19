/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}), ${opacityValue})`
  }
}

module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      text: `var(${'--text'})`,
      background: `var(${'--background'})`,
      heading: `var(${'--heading'})`,
      secondary: `var(${'--secondary'})`,
      friend: `var(${'--friend'})`,
      friendHover: `var(${'--friendHover'})`,
      primary: `var(${'--primary'})`,
      primaryHover: `var(${'--primaryHover'})`,
      muted: `var(${'--muted'})`,
      success: `var(${'--success'})`,
      info: `var(${'--info'})`,
      warning: `var(${'--warning'})`,
      danger: `var(${'--danger'})`,
      light: `var(${'--light'})`,
      dark: `var(${'--dark'})`,
      toggleIcon: `var(${'--toggleIcon'})`,
      divide: `var(${'--divide'})`,
      highlightLineBg: `var(${'--highlightLineBg'})`,
      plainColor: `var(${'--plain-color'})`,
      plainBackgroundColor: `var(${'--plain-backgroundColor'})`,
      commentColor: `var(${'--comment-color'})`,
      commentFontStyle: `var(${'--comment-fontStyle'})`,
      prologColor: `var(${'--prolog-color'})`,
      prologFontStyle: `var(${'--prolog-fontStyle'})`,
      doctypeColor: `var(${'--doctype-color'})`,
      doctypeFontStyle: `var(${'--doctype-fontStyle'})`,
      cdataColor: `var(${'--cdata-color'})`,
      cdataFontStyle: `var(${'--cdata-fontStyle'})`,
      namespaceOpacity: `var(${'--namespace-opacity'})`,
      stringColor: `var(${'--string-color'})`,
      attrValueColor: `var(${'--attr-value-color'})`,
      punctuationColor: `var(${'--punctuation-color'})`,
      operatorColor: `var(${'--operator-color'})`,
      entityColor: `var(${'--entity-color'})`,
      urlColor: `var(${'--url-color'})`,
      symbolColor: `var(${'--symbol-color'})`,
      numberColor: `var(${'--number-color'})`,
      booleanColor: `var(${'--boolean-color'})`,
      variableColor: `var(${'--variable-color'})`,
      constantColor: `var(${'--constant-color'})`,
      propertyColor: `var(${'--property-color'})`,
      regexColor: `var(${'--regex-color'})`,
      insertedColor: `var(${'--inserted-color'})`,
      atruleColor: `var(${'--atrule-color'})`,
      keywordColor: `var(${'--keyword-color'})`,
      attrNameColor: `var(${'--attr-name-color'})`,
      selectorColor: `var(${'--selector-color'})`,
      functionColor: `var(${'--function-color'})`,
      deletedColor: `var(${'--deleted-color'})`,
      tagColor: `var(${'--tag-color'})`,
      functionVariableColor: `var(${'--function-variable-color'})`,

      builtinColor: `var(${'--builtin-color'})`,
      changedColor: `var(${'--changed-color'})`,
      charColor: `var(${'--char-color'})`,
      classNameColor: `var(${'--class-name-color'})`,
      interpolationPunctuationColor: `var(${'--interpolation-punctuation-color'})`,
      templatePunctuationColor: `var(${'--template-punctuation-color'})`,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        highlight: withOpacityValue('--color-highlight'),
        main: withOpacityValue('--color-text-main'),
        muted: withOpacityValue('--color-text-muted'),
        invert: withOpacityValue('--color-text-invert'),
      },
      // 设置背景颜色基础类
      // 其中 base 基础类是用于设置网页背景色，nav 基础类用于设置导航栏背景色
      // 其他的基础类是用于设置元素的填充背景色
      backgroundColor: {
        highlight: withOpacityValue('--color-highlight'),
        base: withOpacityValue('--color-bg-base'),
        nav: withOpacityValue('--color-bg-nav'),
        main: withOpacityValue('--color-fill-main'),
      },
      // 设置渐变颜色基础类
      gradientColorStops: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置表单外框阴影颜色基础类
      ringColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置卡片阴影颜色基础类
      boxShadowColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置边框颜色基础类
      borderColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置光标颜色基础类
      caretColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置表单强调色基础类
      accentColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
    },
  },
  plugins: [],
}
