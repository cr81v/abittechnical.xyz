import { css } from 'styled-components'

export const buttonStyles = css`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0.75em 1em;
  font-size: 1rem;
  font-weight: 600;
  border: 4px solid;
  text-decoration: none;
  background-color: var(--color-secondary);
  box-shadow: inset -4px -4px 0 var(--color-primary-alt);
  &:hover {
    background-color: var(--color-primary);
    box-shadow: inset -4px -4px 0 var(--color-primary);
    color: var(--color-secondary);
    border-color: var(--color-primary);
  }

  @media all and (min-width: 1300px) {
    font-size: 1.125rem;
  }
`
