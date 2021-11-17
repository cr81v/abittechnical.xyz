import React from 'react'
import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as Meta<HeaderProps>

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
