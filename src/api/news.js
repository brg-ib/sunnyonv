import axios from 'axios'

export default {
  fetchTopNews: params => axios.get('/top-headlines', { params })
}
