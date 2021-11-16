import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

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
