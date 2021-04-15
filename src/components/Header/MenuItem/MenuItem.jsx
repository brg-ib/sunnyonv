import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import fontSizes from '../../../utils/fontSizes'
import colors from '../../../utils/colors'
import breakpoints from '../../../utils/breakpoints'

const NavButton = styled.button`
  cursor: pointer;
  height: 100%;
  width: ${({ width }) => width};
  border: none;
  ${({ rightSide }) => rightSide ? 'border-left' : 'border-right'}: 1px solid ${colors.darkSecondaryColor};
  font-size: ${fontSizes.large};
  color: ${colors.white};
  background-color: ${({ active }) => active ? colors.darkPrimaryColor : colors.primaryColor};
  transition: background-color .2s;
  
  :hover {
    background-color: ${colors.darkPrimaryColor};
  }
  
  :active {
    background-color: ${colors.primaryColor};
  }
  
  @media screen and (max-width: ${breakpoints.largeTablet}) {
    border-bottom: 1px solid ${colors.darkSecondaryColor};
    width: 150px;
  }
`

const MenuItem = ({ text, action, rightSide, active, disabled, width }) =>
  <NavButton
    onClick={action}
    rightSide={rightSide}
    active={active}
    width={width}
    disabled={disabled}
  >{text}</NavButton>

MenuItem.propTypes = {
  text: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  rightSide: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.string
}

MenuItem.defaultProps = {
  width: '150px'
}

export default MenuItem
