import { Meta, Story } from '@storybook/react'
import StyledLink, { StyledLinkProps } from './StyledLink'

export default {
  title: 'Elements/StyledLink',
  component: StyledLink,
  argTypes: {},
} as Meta<StyledLinkProps>

const Template: Story<StyledLinkProps> = args => <StyledLink {...args} />

export const Default = Template.bind({})
Default.args = {
  href: '/post/[pid]',
  forwardedAs: '/post/abc',
  children: 'First post',
}
