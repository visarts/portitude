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
    main: '#452d6a',
    highlight: '#6a3fac',
  },
  lit: {
    main: '#174956',
    highlight: '#348094',
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
    main: '#6a3fac',
    highlight: '#8c66ce',
  },
  lit: {
    main: '#348094',
    highlight: '#56a2b6',
  }
}

type ThemeType = typeof theme

export type GlobalThemeType = ThemeType