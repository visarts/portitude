import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Typography } from './_common'

const StyledHomeNav = styled.div`
  display: flex;
  width: 100%;
`
interface homeNavItemProps {
  themeVariant: string
}

const StyledHomeNavItem = styled(({ themeVariant, ...other }) => (
  <Link {...other} />
))<homeNavItemProps>`
  flex-grow: 1;
  padding: 30px 20px;
  border-top-right-radius: 50px;
  cursor: pointer;
  transition: .2s all;
  color: inherit;
  text-decoration: none;
  &:first-child {
    margin-right: 20px;
  }
  ${({ themeVariant, theme }) => css`
    background: ${theme.higher};
    border: 1px solid ${theme.highlight};
    border-bottom: 10px solid ${theme[themeVariant].main};
    box-shadow: ${theme.boxShadows.medium};
    &:hover {
      background: ${theme.highlight};
      border-bottom-color: ${theme[themeVariant].highlight};
    }
  `}
`
interface HomeProps {
  toggleTheme: () => void
}

function Home ({ toggleTheme }: HomeProps) {
  return (
    <StyledHomeNav>
      <StyledHomeNavItem to="/arts" themeVariant="arts">
        <Typography variant="h3">The Arts</Typography>
        <Typography variant="body">
          Anyone lived in a pretty how town with up so floating many bells down
        </Typography>
      </StyledHomeNavItem>
      <StyledHomeNavItem to="/literature" themeVariant="lit">
        <Typography variant="h3">Literature</Typography>
        <Typography variant="body">
          Anyone lived in a pretty how town with up so floating many bells down
        </Typography>
      </StyledHomeNavItem>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    </StyledHomeNav>
  )
}

export default Home
