import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Carousel from '../../components/Carousel/Carousel'
import IconButton from '../IconButton/IconButton'
import colors from '../../utils/colors'
import fontSizes from '../../utils/fontSizes'

const arrowIcon = require('../../assets/arrow-icon.svg')

const Title = styled.div`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  margin: 20px 10px 20px 20px;
  color: ${colors.black};
  font-size: ${fontSizes.extraLarge};
`

const CarouselWrapper = styled.div`
  max-height: 0;
  transition: max-height .6s;
  overflow: hidden;
  
  ${({ isOpen }) => isOpen && { 'max-height': '600px' }};
`

const CategoryCarousel = ({ category, categoryItems, country, fetchNewsByCategory }) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      fetchNewsByCategory(country)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      fetchNewsByCategory(country)
    }
  }, [country])

  return (
    <>
      <Title>
        <StyledLink to={`/category/${category}`}>{t(category)}</StyledLink>
        <IconButton
          icon={arrowIcon}
          iconHeight="20px"
          rotate={isOpen ? 90 : 0}
          margin="5px 0 0"
          onClick={() => setIsOpen(prevState => !prevState)}
        />
      </Title>
      <CarouselWrapper isOpen={!!categoryItems.length && isOpen}>
        {!!categoryItems.length && (
          <Carousel items={categoryItems} category={category} />
        )}
      </CarouselWrapper>
    </>
  )
}

CategoryCarousel.propTypes = {
  category: PropTypes.string,
  categoryItems: PropTypes.arrayOf(PropTypes.object),
  country: PropTypes.string,
  fetchNewsByCategory: PropTypes.func
}

CategoryCarousel.defaultProps = {
  categoryItems: []
}

export default CategoryCarousel
