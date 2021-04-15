import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  cursor: pointer;
  ${({ margin }) => margin && { margin }};
  border: none;
  background-color: transparent;
  transition: transform .4s;
 
  ${({ rotate }) => rotate && { transform: `rotate(${rotate}deg)` }};
  
  :disabled {
    cursor: not-allowed;
  }
`

const Icon = styled.img`
  ${({ iconHeight }) => iconHeight && { height: iconHeight }};
  ${({ iconWidth }) => iconWidth && { width: iconWidth }};
  ${({ disabled }) => disabled && { opacity: 0.2 }}
`

const IconButton = ({ icon, iconWidth, iconHeight, rotate, margin, onClick, disabled }) => {
  return (
    <Button rotate={rotate} margin={margin} onClick={onClick} disabled={disabled}>
      <Icon src={icon} iconWidth={iconWidth} iconHeight={iconHeight} disabled={disabled} />
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rotate: PropTypes.number,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default IconButton
