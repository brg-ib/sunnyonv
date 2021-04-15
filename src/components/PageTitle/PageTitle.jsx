import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import fontSizes from '../../utils/fontSizes'
import breakpoints from '../../utils/breakpoints'

const Title = styled.h1`  
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: ${fontSizes.extraLarge};
  }
`

const PageTitle = ({ text }) => <Title>{text}</Title>

PageTitle.propTypes = {
  text: PropTypes.string
}

export default PageTitle
