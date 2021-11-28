import React from 'react'
import styled from 'styled-components'

export type MenuProps = {}

const links = [
  { href: '#', text: 'All Articles', icon: '↴' },
  { href: '#', text: 'Topics', icon: '↴' },
  { href: '#', text: 'Tags', icon: '↴' },
  { href: '#', text: 'TLDR;(s)', icon: '↴' },
  { href: '#', text: 'About', icon: '↴' },
  { href: '#', text: 'Source Files', icon: '→' },
]

const Nav = styled.nav`
  display: flex;
  background-color: var(--color-secondary);
  border-bottom: 4px solid var(--color-primary);
  font-size: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  

  @media all and (min-width: 1300px) {
    border: 4px solid var(--color-primary);
    width: 250px;
    position: fixed;
    z-index: 100;
    top: 8rem;
    left: 4rem;
    margin-bottom: 0;
  }
`

const NavLinks = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li:nth-child(2n+1) {
    border-right: 4px solid;
  }
  li:nth-child(n+3) {
    border-top: 4px solid;
  }

  @media all and (min-width: 1300px) {
    flex-direction: column;
    li:nth-child(2n+1) {
      border-right: none;
    }
  }
`

const NavLinkItem = styled.li`
  width: 50%;
   & + & {
     border-top: none;
  }
  @media all and (min-width: 1300px) {
    width: 100%;
    & + & {
      border-top: 4px solid;
    }
  }
`
const NavLink = styled.a`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  padding: 1em;
  line-height: 1;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
  &::after {
    font-family: var(--font-family-secondary);
    content: '↴';
    display: block;
    margin-left: auto;
    padding-left: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;

    @media all and (min-width: 1300px) {
      font-size: 1.5rem;
    }
  }

  @media all and (min-width: 1300px) {
    font-size: 1.25rem;
    padding: 1.25em;
  }
`

const Menu = () => {
  return (
    <Nav>
      <NavLinks>
        {links.map((link, index) => (
          <NavLinkItem key={index}>
            <NavLink>{link.text}</NavLink>
          </NavLinkItem>
        ))}
      </NavLinks>
    </Nav>
  )
}

export default Menu
