import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import styled from 'styled-components'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Download CSS',
}

const Svg = styled.svg`
  width: 1em;
  height: 1em;
  margin-right: 0.25em;
  fill: currentColor;
`

const Content = () => (
  <>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" />
    </Svg>
    Star on Github
  </>
)

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: <Content />,
}
