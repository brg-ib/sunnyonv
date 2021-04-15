import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PageTitle from '../../components/PageTitle/PageTitle'
import Button from '../../components/Button/Button'
import colors from '../../utils/colors'
import fontSizes from '../../utils/fontSizes'
import breakpoints from '../../utils/breakpoints'

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 60%;
  
  @media screen and (max-width: ${breakpoints.laptop}) {
    width: 100%; 
  }  
`

const Content = styled.p`
  font-size: ${fontSizes.large};
  color: ${colors.descriptionColor};
`

const Article = ({ articles, topFiveNews }) => {
  const { t } = useTranslation()
  const { index } = useParams()
  const history = useHistory()
  const { category } = history.location.state || {}
  if ((!articles.length && !category) || !index) {
    history.push('/')
  }
  const { title, urlToImage, content } = (category ? topFiveNews[category][index] : articles[index]) || {}

  return (
    <>
      <PageTitle text={title || t('noTitleAvailable')} />
      <ImageWrapper>
        <Image src={urlToImage} alt="News image" />
      </ImageWrapper>
      <Content>{content || t('noContentAvailable')}</Content>
      <Button text={t('backToList')} onClick={() => history.go(-1)} />
    </>
  )
}

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  topFiveNews: PropTypes.shape({})
}

const mapStateToProps = ({ news: { articles, topFiveNews } }) => ({ articles, topFiveNews })

export default connect(mapStateToProps)(Article)
