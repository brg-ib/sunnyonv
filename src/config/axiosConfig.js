import axios from 'axios'

axios.defaults.baseURL = 'https://newsapi.org/v2'

axios.interceptors.request.use(config => {
  config.params.apiKey = '45dff7196981442cb3b4b657934f0ca5'
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})
