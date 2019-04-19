import React from 'react'
import styled from 'styled-components'

const StyledHomeNav = styled.div`
  display: flex;
  width: 100%;
`

const StyledHomeNavItem = styled.div`
  flex-grow: 1;
`

function Home () {
  return (
    <StyledHomeNav>
      <StyledHomeNavItem>
        <h2>The Arts</h2>
      </StyledHomeNavItem>
      <StyledHomeNavItem>
        <h2>Literature</h2>
      </StyledHomeNavItem>
    </StyledHomeNav>
  )
}

export default Home
