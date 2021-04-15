import React from 'react'
import Menu from './Menu'
import colors from '../../../utils/colors'

export default {
  component: Menu,
  title: 'Menu',
  decorators: [Story => <div style={{
    position: 'relative',
    display: 'flex',
    'align-items': 'center',
    height: '60px',
    'background-color': colors.primaryColor
  }}><Story /></div>]
}

const Template = args => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { text: 'Item 1', action: () => alert('Item 1') },
    { text: 'Item 2', action: () => alert('Item 2') },
    { text: 'Item 3', action: () => alert('Item 3') }
  ]
}
