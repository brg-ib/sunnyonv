import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { fetchTopNews, clearArticles } from '../../store/actions/news'
import { connect } from 'react-redux'
import PageTitle from '../../components/PageTitle/PageTitle'
import NewsCard from '../../components/NewsCard/NewsCard'
import Loader from '../../components/Loader/Loader'
import fontSizes from '../../utils/fontSizes'

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const SearchInput = styled.input`
  height: 50px;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  font-size: ${fontSizes.large};
`

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Search = ({ articles, country, loading, fetchTopNews, clearArticles }) => {
  const { t } = useTranslation()
  const [searchText, setSearchText] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)
  const [typingTerm, setTypingTerm] = useState(false)
  const [allowLoader, setAllowLoader] = useState(false)
  const searchResults = articles.length && searchText
    ? articles.map(({ title, urlToImage, description }, index) => (
      <NewsCard
        key={index}
        index={index}
        title={title}
        urlToImage={urlToImage}
        description={description}
      />
    ))
    : searchText ? t('noResults') : ''

  useEffect(() => {
    // Requete
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      if (searchText) {
        fetchTopNews({ country, q: searchText, pageSize: 100 })
      }
      setTypingTerm(false)
    }, 2000))
    if (!typingTerm) {
      setTypingTerm(true)
    }
    if (!allowLoader && searchText) {
      setAllowLoader(true)
    }
  }, [searchText])

  useEffect(() => {
    if (country && searchText) {
      fetchTopNews({ country, q: searchText, pageSize: 100 })
    }
  }, [country])

  useEffect(() => {
    clearArticles()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <PageTitle text={`${t('topNews')} ${t('byTerms')}`} />
      <SearchWrapper>
        <SearchInput placeholder={t('searchTerm')} value={searchText} onChange={event => setSearchText(event.target.value)} />
      </SearchWrapper>
      <SearchResults>
        {loading || typingTerm
          ? (allowLoader && <Loader />)
          : searchResults}
      </SearchResults>
    </>
  )
}

Search.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  country: PropTypes.string,
  loading: PropTypes.bool,
  fetchTopNews: PropTypes.func,
  clearArticles: PropTypes.func
}

const mapStateToProps = ({ news: { articles, country, loading } }) => ({ articles, country, loading })

const mapDispatchToProps = dispatch => ({
  fetchTopNews: params => dispatch(fetchTopNews(params)),
  clearArticles: () => dispatch(clearArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
