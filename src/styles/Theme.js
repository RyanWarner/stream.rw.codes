const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"

const typeTokens = {
  fontFamily: `'ClearSans', ${sansSerifFallback}`
}

const shared = {
  blue10: '#111A20',
  blue35: '#3B5466'
}

export default {
  light: {
    ...typeTokens,
    ...shared,
    background: '#FBFBF9',
    text10: '#1E1E1B',
    text20: '#696966',
    rule: 'rgba(0, 0, 0, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  },
  dark: {
    ...typeTokens,
    ...shared,
    background: '#171716',
    text10: '#FBFBF9',
    text20: '#9C9C96',
    rule: 'rgba(255, 255, 255, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  }
}
