import { createGlobalStyle, css } from 'styled-components'
import { GlobalThemeType } from './theme'

const StyledGlobal = createGlobalStyle<{ theme: GlobalThemeType }>`
  body {
    font: 1em 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    ${({ theme }) => css`
      background: ${theme.main};
      color: ${theme.text.main};
    `}
  }
`

export default StyledGlobal
