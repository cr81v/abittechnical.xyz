import styled from 'styled-components'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import React from 'react'
import Container from '../components/Container/Container'

const Content = () => (
  <div className="container">
    <h2>Under Construction</h2>
    <ul className="features">
      <li>
        <span>
          <a href="/styles/retro">
            Retro<span aria-hidden="true"></span>
          </a>
          <span>by Rachel B</span>
        </span>
      </li>
      <li>
        <span>
          <a href="/styles/vaporwave">
            Vaporwave<span aria-hidden="true"></span>
          </a>
          <span>by Shannon Crabill</span>
        </span>
      </li>
      <li>
        <span>
          <a href="/styles/barebones">
            Barebones<span aria-hidden="true"></span>
          </a>
          <span>by Vinícius Philot</span>
        </span>
      </li>
    </ul>

    <a href="/styles/" className="link-allstyles">
      View All Styles
    </a>
  </div>
)

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Container>
        <Content />
      </Container>
    </>
  )
}
