import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import CategoryCarousel from './CategoryCarousel'

export default {
  component: CategoryCarousel,
  title: 'CategoryCarousel',
  decorators: [Story => <Provider store={store}><BrowserRouter><Story /></BrowserRouter></Provider>]
}

const Template = args => <CategoryCarousel {...args} />

export const Default = Template.bind({})
