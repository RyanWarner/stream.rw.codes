import { css, createGlobalStyle } from 'styled-components'
import 'focus-visible'

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
}

export const GlobalType = css`
  a {
    transition: all 300ms ease;
    color: ${props => props.theme.blue60};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.glow20};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${props => props.theme.glow20};
      border-radius: 4px;
    }

    &:focus:not(.focus-visible) {
      outline: none;
      box-shadow: none;
    }
  }
`
