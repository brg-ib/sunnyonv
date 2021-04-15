import React from 'react'
import Loader from './Loader'
import colors from '../../utils/colors'

export default {
  component: Loader,
  title: 'Loading'
}

const Template = args => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  color: colors.primaryColor
}

export const Colored = Template.bind({})
Colored.args = {
  color: colors.info
}
