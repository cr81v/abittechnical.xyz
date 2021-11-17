import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import StyledLink from '../StyledLink'
import Button from '../Button/Button'
import { buttonStyles } from '../../theme/mixins'

export type HeaderProps = {}

const HeaderWrapper = styled.header`
  background-color: var(--color-secondary);
  border-bottom: 4px solid;
  width: 100%;
  @media all and (min-width: 1300px) {
    & {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
    }
  }
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1300px) {
    padding: 0;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    h1,
    h2,
    p {
      font-size: 1rem;
      padding: 1em 1.5em;
      line-height: 1;
      flex-grow: 1;
    }
    & > * + * {
      margin-top: 0;
      border-left: 4px solid;
    }
  }
`

const Brand = styled.h1`
  font-size: 1.5rem;
`

const MenuTrigger = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  font-family: var(--font-family-secondary);
  display: block;
  margin-left: auto;
  padding-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  & > *:focus {
    outline: none;
  }
`

const Description = styled.h2`
  font-size: 1.25rem;
`

const LoginCallToAction = styled.button`
  ${buttonStyles};
  padding: 1em 1.5em;
  line-height: 1;
`

const Author = styled.p``

const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FlexBox>
          <Link href="/">
            <a>
              <Brand>A Bit Technical</Brand>
            </a>
          </Link>
          <MenuTrigger>↴</MenuTrigger>
        </FlexBox>
        <Description>
          Software related color commentary, in black & white
        </Description>
        <Author>
          Maintained by{' '}
          <StyledLink href="#" forwardedAs="#">
            The Tellusstraighter
          </StyledLink>
        </Author>
        <LoginCallToAction>Login</LoginCallToAction>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
