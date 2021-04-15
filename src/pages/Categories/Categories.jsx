import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { fetchNewsByCategory, clearTopFiveNews } from '../../store/actions/news'
import PageTitle from '../../components/PageTitle/PageTitle'
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel'
import colors from '../../utils/colors'

const AllCategories = styled.div`
  border: 1px solid ${colors.black};
  border-radius: 10px;
`

const Categories = ({ country, topFiveNews, fetchNewsByCategory, clearTopFiveNews }) => {
  const { t } = useTranslation()
  const availableCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

  useEffect(() => {
    clearTopFiveNews()
  }, [])

  return (
    <>
      <PageTitle text={`${t('top5NewsByCategoryFrom')} ${t(country)}`} />
      <AllCategories>
        {availableCategories.map(category =>
          <CategoryCarousel
            key={category}
            category={category}
            categoryItems={topFiveNews[category]}
            country={country}
            fetchNewsByCategory={country => fetchNewsByCategory({ country, category, pageSize: 5 })}
          />)}
      </AllCategories>
    </>
  )
}

Categories.propTypes = {
  country: PropTypes.string,
  topFiveNews: PropTypes.shape({}),
  fetchNewsByCategory: PropTypes.func,
  clearTopFiveNews: PropTypes.func
}

const mapStateToProps = ({ news: { country, topFiveNews } }) => ({ country, topFiveNews })

const mapDispatchToProps = dispatch => ({
  fetchNewsByCategory: params => dispatch(fetchNewsByCategory(params)),
  clearTopFiveNews: () => dispatch(clearTopFiveNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
