import React from 'react'
import Button from './Button'
import colors from '../../utils/colors'
import fontSizes from '../../utils/fontSizes'

export default {
  component: Button,
  title: 'Button'
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Click Me',
  fontSize: fontSizes.normal,
  textColor: colors.white,
  bgColor: colors.primaryColor,
  bgColorHover: colors.darkPrimaryColor
}

export const Success = Template.bind({})
Success.args = {
  text: 'Click Me',
  type: 'success',
  fontSize: fontSizes.normal,
  textColor: colors.white
}

export const Info = Template.bind({})
Info.args = {
  text: 'Click Me',
  type: 'info',
  fontSize: fontSizes.normal,
  textColor: colors.white
}

export const Warning = Template.bind({})
Warning.args = {
  text: 'Click Me',
  type: 'warning',
  fontSize: fontSizes.normal,
  textColor: colors.white
}

export const Error = Template.bind({})
Error.args = {
  text: 'Click Me',
  type: 'error',
  fontSize: fontSizes.normal,
  textColor: colors.white
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: 'Click Me',
  disabled: true
}
