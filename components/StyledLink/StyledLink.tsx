import Link from 'next/link'
import styled from 'styled-components'

export type StyledLinkProps = {
  children: string
  as?: string
  className?: string
  href: string
}

const LinkWrapper = ({ as, children, className, href }: StyledLinkProps) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

const StyledLink = styled(LinkWrapper)`
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid;

  &:hover {
    border-bottom-width: 4px;
  }
`

export default StyledLink
