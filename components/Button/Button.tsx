import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { buttonStyles } from '../../theme/mixins'

export type ButtonProps = {
  children: ReactNode
}

const ButtonWrapper = styled.button`
  ${buttonStyles};
`

const Button = ({ children }: ButtonProps) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

export default Button
