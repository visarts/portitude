import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'

import Arts from './components/Arts'
import Literature from './components/Literature'

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
      <Router>
        <StyledGlobal />
        <Header title="Portitude" />
        <StyledAppContainer>
          <Route exact path="/" render={() => <Home toggleTheme={toggleTheme} />} />
          <Route exact path="/arts" render={() => <Arts />} />
          <Route exact path="/literature" render={() => <Literature />} />
        </StyledAppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
