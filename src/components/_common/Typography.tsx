import React from 'react'
import styled, { css } from 'styled-components'

const typographyHeaderBase = css`
  font-weight: 400;
  font-family: 'Rock Salt', sans-serif;
  margin-top: 0rem;
`

const StyledH1 = styled.h1`
  ${typographyHeaderBase}
  font-size: 2.25rem;
`

const StyledH2 = styled.h2`
  ${typographyHeaderBase}
  font-size: 1.9rem;
`

const StyledH3 = styled.h3`
  ${typographyHeaderBase}
  font-size: 1.6rem;
`

const StyledH4 = styled.h4`
  ${typographyHeaderBase}
  font-size: 1.35rem;
`

const StyledH5 = styled.h5`
  ${typographyHeaderBase}
  font-size: 1.2rem;
`

const StyledH6 = styled.h6`
  ${typographyHeaderBase}
  font-size: 1.1rem;
`

const StyledBody = styled.span`
  font-size: 1rem;
`

interface VariantEnum {
  [key: string]: React.FunctionComponent
}

const typographyVariantEnum: VariantEnum = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  body: StyledBody,
}

interface TypographyProps {
  variant: string
  children: React.ReactNode
  className?: string
}

function Typography({ variant, children, ...other }: TypographyProps) {
  const TypographyEl = typographyVariantEnum[variant]
  return (
    <TypographyEl {...other}>
      {children}
    </TypographyEl>
  )
}

export default Typography
