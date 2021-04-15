import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './config/i18n'
import './config/axiosConfig'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import Loader from './components/Loader/Loader'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

//
serviceWorkerRegistration.register()
