import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background: #333;
    color: white;
    display: flex;
    width: 100%;
    border-bottom: 12px solid #aa5588;
`

const StyledHeaderTitle = styled.h1`
    margin: 0;
    padding: 20px;
    font-weight: 500;
`

interface HeaderProps {
    title: string
}

function Header ({ title = 'Portitude' }: HeaderProps) {
    return (
        <StyledHeader><StyledHeaderTitle>{title}</StyledHeaderTitle></StyledHeader>
    )
}

export default Header