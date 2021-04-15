import {
  SET_NEWS,
  SET_LOADING,
  SET_NEWS_BY_CATEGORY,
  SET_COUNTRY,
  CLEAR_ARTICLES,
  CLEAR_TOP_FIVE_NEWS
} from '../actionTypes'

const initialState = {
  articles: [],
  topFiveNews: {},
  loading: true,
  country: 'fr'
}

export const news = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        articles: action.articles
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case SET_NEWS_BY_CATEGORY:
      return {
        ...state,
        topFiveNews: {
          ...state.topFiveNews,
          [action.category]: action.articles
        }
      }
    case SET_COUNTRY:
      return {
        ...state,
        country: action.country
      }
    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: []
      }
    case CLEAR_TOP_FIVE_NEWS:
      return {
        ...state,
        topFiveNews: {}
      }
    default:
      return state
  }
}
