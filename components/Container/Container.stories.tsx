import React from 'react'
import { Meta, Story } from '@storybook/react'
import Container, { ContainerProps } from './Container'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {},
} as Meta<ContainerProps>

const Template: Story<ContainerProps> = args => <Container {...args} />

const Content = () => (
  <div className="container">
    <h2>Featured Styles</h2>
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
export const Default = Template.bind({})
Default.args = {
  children: <Content />,
}
