import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

export default {
  component: Header,
  title: 'Header',
  decorators: [Story =>
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      </BrowserRouter>
    </Provider>
  ]
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
