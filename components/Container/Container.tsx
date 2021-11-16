import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type ContainerProps = {
  children: ReactNode
}

const ContainerWrapper = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  border: 4px solid var(--color-primary);
  box-shadow: 12px 12px 0 0 var(--color-primary);
  padding: 6rem 2rem 3rem 2rem;
  position: relative;
  background: repeating-radial-gradient(
      var(--color-secondary),
      var(--color-secondary) 6px,
      var(--color-primary) 6px,
      var(--color-primary) 10px,
      transparent 0%,
      transparent 100%
    ),
    repeating-radial-gradient(
      var(--color-secondary),
      var(--color-secondary) 6px,
      var(--color-primary) 6px,
      var(--color-primary) 10px,
      transparent 0%,
      transparent 100%
    ),
    linear-gradient(
      var(--color-primary-alt),
      var(--color-primary-alt) 60px,
      var(--color-primary) 60px,
      var(--color-primary) 64px
    );
  background-color: var(--color-secondary);
  background-position: right 5px, right 30px top 5px, 0 0;
  background-size: 50px 50px, 50px 50px, 100% 64px;
  background-repeat: no-repeat;

  @media all and (min-width: 1300px) {
    padding: 8rem 4rem 4rem 4rem;
    width: 100%;
  }
`

const Container = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
