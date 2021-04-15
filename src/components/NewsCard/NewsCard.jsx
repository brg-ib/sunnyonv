import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import colors from '../../utils/colors'
import fontSizes from '../../utils/fontSizes'
import breakpoints from '../../utils/breakpoints'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33% - 8px);
  margin: 4px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  overflow: hidden;
  
  @media screen and (max-width: ${breakpoints.laptop}) {
    width: calc(50% - 8px);
  }
  
  @media screen and (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 8px);
  }
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  height: 100px;
  margin: 0;
  padding: 10px;
  color: ${colors.white};
  background-color: ${colors.primaryColor};
  
  @media screen and (max-width: ${breakpoints.largeLaptop}) {
    font-size: ${fontSizes.large};
  }
  
  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 80px;
  }
  
  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${fontSizes.normal};
  }
`

const ImageWrapper = styled.div`
  height: 15vw;
  text-align: center;
  background-color: ${colors.black};
  
  @media screen and (max-width: ${breakpoints.laptop}) {
    height: 25vw;
  }
  
  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 40vw;
  }
`

const Image = styled.img`
  height: 100%;
  max-width: 100%;
`

const Description = styled.p`
  margin: 10px;
  color: ${colors.descriptionColor};
  overflow: hidden;
`

const ButtonContainer = styled.div`
  flex: 1 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

// eslint-disable-next-line react/display-name
const NewsCard = forwardRef(({
  className,
  index,
  category,
  title,
  urlToImage,
  description
}, ref) => {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <Card className={className} ref={ref}>
      <Title>{title || t('noTitleAvailable')}</Title>
      <ImageWrapper>
        <Image src={urlToImage}/>
      </ImageWrapper>
      <Description>{description || t('noDescriptionAvailable')}</Description>
      <ButtonContainer>
        <Button
          text={t('more')}
          onClick={() => history.push(`/article/${index}`, { category })}
        />
      </ButtonContainer>
    </Card>
  )
})

NewsCard.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string
}

export default NewsCard
