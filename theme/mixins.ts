import { css } from 'styled-components'

export const buttonStyles = css`
  box-shadow: inset -4px -4px 0 var(--color-primary);
  color: var(--color-secondary);
  border-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    -webkit-box-shadow: inset -4px -4px 0 var(--color-primary);
    box-shadow: inset -4px -4px 0 var(--color-primary);
    color: var(--color-secondary);
    border-color: var(--color-primary);
  }
`
