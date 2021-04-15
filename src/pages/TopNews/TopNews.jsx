import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { fetchTopNews, clearArticles } from '../../store/actions/news'
import PageTitle from '../../components/PageTitle/PageTitle'
import NewsCard from '../../components/NewsCard/NewsCard'
import Loader from '../../components/Loader/Loader'

const TopNews = ({ country, articles, loading, fetchTopNews, clearArticles }) => {
  const { t } = useTranslation()
  const { category } = useParams()

  const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

  useEffect(() => {
    fetchTopNews({ country, category, pageSize: 100 })
  }, [country, category])

  useEffect(() => {
    clearArticles()
  }, [])

  return loading ? (
    <Loader />
  ) : (

    <Fragment>
      <PageTitle text={`${t('topNews')}`} />
      <NewsContainer>
        {articles.map(({ title, urlToImage, description }, index) => (
          <NewsCard
            key={index}
            index={index}
            title={title}
            urlToImage={urlToImage}
            description={description}
          />
        ))}
      </NewsContainer>
    </Fragment>

  )
}

TopNews.propTypes = {
  country: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  fetchTopNews: PropTypes.func,
  clearArticles: PropTypes.func
}

const mapStateToProps = ({ news: { country, articles, loading } }) => ({
  country,
  articles,
  loading
})

const mapDispatchToProps = dispatch => ({
  fetchTopNews: params => dispatch(fetchTopNews(params)),
  clearArticles: () => dispatch(clearArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNews)
