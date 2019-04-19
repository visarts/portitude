import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 2em;
  font-weight: 500;
`

interface VariantEnum {
  [key: string]: any
}

const typographyVariantEnum: VariantEnum = {
  h1: StyledH1,
}

interface TypographyProps {
  variant: string
  children: React.ReactNode
}

function Typography({ variant, children }: TypographyProps) {
  const typographyElementType = typographyVariantEnum[variant]
  const typographyElement = React.createElement(
    typographyElementType,
    null,
    children,
  )
  return typographyElement
}

export default Typography
