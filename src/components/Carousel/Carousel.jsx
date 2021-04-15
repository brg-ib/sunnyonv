import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconButton from '../../components/IconButton/IconButton'
import NewsCard from '../NewsCard/NewsCard'
import fontSizes from '../../utils/fontSizes'
import breakpoints from '../../utils/breakpoints'

const arrowIcon = require('../../assets/arrow-icon.svg')

const CarouselWrapper = styled.div`
  position: relative;
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  ${({ right }) => right ? { right: 0 } : { left: 0 }};
  font-size: ${fontSizes.extraLarge};
  transform: translateY(-50%);
`

const ItemsWrapper = styled.div`
  position: relative;
  margin: 0 40px;
  overflow: hidden;
`

const CarouselItems = styled.div`
  position: absolute;
  display: flex;
  transition: transform .2s;
`

const StyledNewsCard = styled(NewsCard)`
  width: 33vw;
`

const Carousel = ({ items, category }) => {
  const carouselRef = useRef(null)
  const itemsWrapperRef = useRef(null)
  const itemRefs = useRef([])
  const [itemPosition, setItemPosition] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [sideMargins, setSideMargins] = useState(0)

  const calculateAndSetItemWidth = () => {
    if (window.innerWidth >= extractPxFromNumber(breakpoints.laptop)) {
      setItemWidth((carouselRef.current?.clientWidth / 3) - sideMargins)
    } else if (window.innerWidth >= extractPxFromNumber(breakpoints.tablet)) {
      setItemWidth((carouselRef.current?.clientWidth / 2) - sideMargins)
    } else if (window.innerWidth <= extractPxFromNumber(breakpoints.tablet)) {
      setItemWidth(carouselRef.current?.clientWidth - sideMargins)
    }
  }

  const setCarouselHeight = () => {
    carouselRef.current.style.height = `${itemsWrapperRef.current.clientHeight}px`
  }

  const extractPxFromNumber = pixels => {
    return +pixels.replace('px', '')
  }

  const scrollToItem = () => {
    if (itemsWrapperRef.current) {
      itemsWrapperRef.current.style.transform =
        `translateX(-${(itemWidth * itemPosition) + (sideMargins * itemPosition)}px)`
    }
  }

  useEffect(() => {
    if (items.length) {
      setSideMargins(extractPxFromNumber(window.getComputedStyle(itemRefs.current[0]).marginLeft) * 2)
    }
    if (sideMargins) {
      setCarouselHeight()
    }
  }, [itemRefs, JSON.stringify(items)])

  useEffect(() => {
    if (sideMargins) {
      calculateAndSetItemWidth()
    }
  }, [sideMargins])

  useEffect(() => {
    itemRefs.current.forEach(item => {
      item.style.width = `${itemWidth}px`
    })
    setCarouselHeight()
    scrollToItem(itemPosition)
  }, [itemWidth])

  useEffect(() => {
    scrollToItem(itemPosition)
  }, [itemPosition])

  window.addEventListener('resize', () => {
    calculateAndSetItemWidth()
  })

  return (
    <CarouselWrapper>
      <ButtonWrapper>
        <IconButton
          icon={arrowIcon}
          iconHeight="20px"
          rotate={180}
          onClick={() => setItemPosition(prevState => prevState - 1)}
          disabled={itemPosition === 0}
        />
      </ButtonWrapper>
      <ItemsWrapper ref={carouselRef}>
        <CarouselItems ref={itemsWrapperRef}>
          {items.map(({ title, urlToImage, description }, index) =>
            <StyledNewsCard
              ref={ref => { itemRefs.current[index] = ref }}
              key={index}
              index={index}
              category={category}
              title={title}
              urlToImage={urlToImage}
              description={description}
            />)}
        </CarouselItems>
      </ItemsWrapper>
      <ButtonWrapper right>
        <IconButton
          icon={arrowIcon}
          iconHeight="20px"
          onClick={() => setItemPosition(prevState => prevState + 1)}
          disabled={itemPosition === items.length - 1}
        />
      </ButtonWrapper>
    </CarouselWrapper>
  )
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string
}

export default Carousel
