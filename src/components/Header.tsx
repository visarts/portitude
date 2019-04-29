import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Typography } from './_common'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  border-bottom-right-radius: 100px;
  ${({ theme }) => css`
    border-bottom: 12px solid ${theme.highlight};
    background: ${theme.deeper};
  `}
`

const StyledHeaderTitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const StyledHeaderTitle = styled(Typography)`
  margin: 0;
  padding: 20px 50px;
`

interface HeaderProps {
  title: string
}

function Header ({ title = 'Portitude' }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledHeaderTitle variant="h1">
        <StyledHeaderTitleLink to="/">{title}</StyledHeaderTitleLink>
      </StyledHeaderTitle>
    </StyledHeader>
  )
}

export default Header