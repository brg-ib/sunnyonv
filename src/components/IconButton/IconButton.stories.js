import React from 'react'
import IconButton from './IconButton'

export default {
  component: IconButton,
  title: 'IconButton'
}

const Template = args => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'https://www.flaticon.com/svg/static/icons/svg/709/709586.svg',
  iconWidth: '40px'
}

export const Disabled = Template.bind({})
Disabled.args = {
  icon: 'https://www.flaticon.com/svg/static/icons/svg/709/709586.svg',
  iconWidth: '40px',
  disabled: true
}
