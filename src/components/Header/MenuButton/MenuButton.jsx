import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../utils/colors'

const ButtonWrapper = styled.button`
  cursor: pointer;
  position: relative;
  height: 25px;
  width: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  
  span {
    opacity: 1;
    display: block;
    position: absolute;
    left: 0;
    height: 8px;
    width: 100%;
    background-color: ${colors.white};
    border-radius: 9px;
    border: 1px solid ${colors.darkSecondaryColor};
    transform: rotate(0deg);
    transform-origin: left center;
    transition: opacity .25s, top .25s, left .25s, transform .25s;
    
    :nth-child(1) {
      top: 0;
    }
    
    :nth-child(2) {
      top: 12px;
    }
    
    :nth-child(3) {
      top: 24px;
    }
  }
  
  &.active span {
    :nth-child(1) {
      top: -3px;
      left: 8px;
      transform: rotate(45deg);
    }
    
    :nth-child(2) {
      opacity: 0;
    }
    
    :nth-child(3) {
      top: 25px;
      left: 8px;
      transform: rotate(-45deg);
    }
  }
`

const MenuButton = ({ isActive, onClick }) => (
  <ButtonWrapper className={`${isActive ? 'active' : ''}`} onClick={onClick}>
    <span />
    <span />
    <span />
  </ButtonWrapper>
)

MenuButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default MenuButton
