import React from 'react'
import MenuItem from './MenuItem'

export default {
  component: MenuItem,
  title: 'MenuItem',
  decorators: [Story => <div style={{ height: '60px' }}><Story /></div>]
}

const Template = args => <MenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Test Item',
  action: () => alert('Hello World!')
}
