import React from 'react'
import MenuButton from './MenuButton'

export default {
  component: MenuButton,
  title: 'MenuButton',
  decorators: [Story => <div style={{ 'padding-bottom': '20px' }}><Story /></div>]
}

const Template = args => <MenuButton {...args} />

export const Default = Template.bind({})
Default.args = {}
