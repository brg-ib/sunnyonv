import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

const LoadingElement = styled.div`
  height: 10em;
  width: 10em;
  margin: 0 auto;
  border: 1.1em solid ${colors.loaderBackground};
  border-left: 1.1em solid ${({ color }) => color};
  border-radius: 50%;
  font-size: 10px;
  animation: loading 1s infinite linear;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader = ({ color }) => <LoadingElement color={color} />

Loader.propTypes = {
  color: PropTypes.string
}

Loader.defaultProps = {
  color: colors.primaryColor
}

export default Loader
