import React from 'react'
import PageTitle from './PageTitle'

export default {
  component: PageTitle,
  title: 'PageTitle'
}

const Template = args => <PageTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Top news from Great Britain'
}
