import React, { Suspense } from 'react'
import LanguageMenu from './LanguageMenu'
import Loader from '../../Loader/Loader'

export default {
  component: LanguageMenu,
  title: 'LanguageMenu',
  decorators: [Story => <Story />]
}

const Template = args => <Suspense fallback={<Loader />}><LanguageMenu {...args}/></Suspense>

export const Default = Template.bind({})
Default.args = {}
