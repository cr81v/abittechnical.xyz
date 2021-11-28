import { Meta, Story } from '@storybook/react'
import React from 'react'
import Menu, { MenuProps } from './Menu'

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
} as Meta<MenuProps>

const Template: Story<MenuProps> = args => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {}
