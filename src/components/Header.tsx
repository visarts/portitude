import React from 'react'
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

const StyledHeaderTitle = styled(Typography)`
  margin: 0;
  padding: 20px 50px;
`

interface HeaderProps {
  title: string
}

function Header ({ title = 'Portitude' }: HeaderProps) {
  return (
    <StyledHeader><StyledHeaderTitle variant="h1">{title}</StyledHeaderTitle></StyledHeader>
  )
}

export default Header