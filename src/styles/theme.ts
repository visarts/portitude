export const theme = {
  main: '#333',
  deeper: '#2a2a2a',
  higher: '#444',
  highlight: '#555',
  text: {
    main: '#ddd',
  },
  boxShadows: {
    medium: '2px 2px 15px rgba(0, 0, 0, .55)',
  },
  arts: {
    highlight: '#452d6a',
  },
  lit: {
    highlight: '#174956',
  }
}

export const lightTheme = {
  main: '#dfdfdf',
  deeper: '#999',
  higher: '#fff',
  highlight: '#ccc',
  text: {
    main: '#444',
  },
  boxShadows: {
    medium: '2px 2px 15px rgba(0, 0, 0, .25)',
  },
  arts: {
    highlight: '#6a3fac',
  },
  lit: {
    highlight: '#348094',
  }
}

type ThemeType = typeof theme

export type GlobalThemeType = ThemeType