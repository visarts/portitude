import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Home from './components/Home'

const StyledAppContainer = styled.div`
  margin: 20px 50px;
`

function App() {
  return (
    <div className="App">
      <Header title="Portitude" />
      <StyledAppContainer>
        <Home />
      </StyledAppContainer>
    </div>
  )
}

export default App
