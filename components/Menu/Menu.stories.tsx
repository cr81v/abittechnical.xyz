import { Meta, Story } from '@storybook/react'
import React from 'react'
import Menu, { DropDownProps } from './Menu'

export default {
  title: 'Components/Drop Down',
  component: Menu,
  argTypes: {},
} as Meta<DropDownProps>

const Template: Story<DropDownProps> = args => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {}
