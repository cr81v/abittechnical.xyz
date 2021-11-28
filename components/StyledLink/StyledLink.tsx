import Link from 'next/link'
import styled from 'styled-components'
import { ReactNode } from 'react'

export type StyledLinkProps = {
  children: string
  as: string
  className?: string
  href: string
}

const CustomLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid;

  &:hover {
    border-bottom-width: 4px;
  }
`

const StyledLink = ({ as, children, className, href }: StyledLinkProps) => (
  <Link href={href} as={as} passHref>
    <CustomLink className={className}>{children}</CustomLink>
  </Link>
)

export default StyledLink
