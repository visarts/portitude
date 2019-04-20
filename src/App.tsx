import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Home from './components/Home'
import StyledGlobal from './styles/main'
import { theme, lightTheme } from './styles/theme'

const StyledAppContainer = styled.div`
  margin: 20px 50px;
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const toggleTheme = () => {
    setIsDarkTheme(oldTheme => !oldTheme)
  }
  return (
    <ThemeProvider theme={isDarkTheme ? theme : lightTheme}>
      <div className="App">
        <StyledGlobal />
        <Header title="Portitude" />
        <StyledAppContainer>
          <Home toggleTheme={toggleTheme} />
        </StyledAppContainer>
      </div>
    </ThemeProvider>
  )
}

export default App
