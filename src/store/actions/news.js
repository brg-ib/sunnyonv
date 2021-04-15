import api from '../../api/news'
import {
  SET_NEWS,
  SET_LOADING,
  SET_NEWS_BY_CATEGORY,
  SET_COUNTRY,
  CLEAR_ARTICLES,
  CLEAR_TOP_FIVE_NEWS
} from '../actionTypes'

export const fetchTopNews = params => dispatch => {
  dispatch({ type: SET_LOADING, loading: true })
  api.fetchTopNews(params)
    .then(({ data }) => {
      dispatch({ type: SET_NEWS, articles: data.articles })
    })
    .finally(() => {
      dispatch({ type: SET_LOADING, loading: false })
    })
}

export const fetchNewsByCategory = params => dispatch => {
  api.fetchTopNews(params)
    .then(({ data }) => {
      dispatch({ type: SET_NEWS_BY_CATEGORY, articles: data.articles, category: params.category })
    })
}

export const clearArticles = () => ({ type: CLEAR_ARTICLES })

export const clearTopFiveNews = () => ({ type: CLEAR_TOP_FIVE_NEWS })

export const setCountry = country => ({ type: SET_COUNTRY, country })
