import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'
import fontSizes from '../../utils/fontSizes'

const ButtonElement = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px 16px;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ textColor }) => textColor};
  background-color: ${({ type, bgColor }) => colors[type] || bgColor};
  transition: background-color .2s, color .2s;
  
  :hover {
    ${({ textColorHover }) => ({ color: textColorHover })};
    background-color: ${({ type, bgColorHover }) => type ? colors[`${type}Hover`] : bgColorHover};
  }
  
  :active {
    color: ${({ textColor }) => textColor};
    background-color: ${({ bgColor, type }) => colors[type] || bgColor};
  }
  
  :disabled {
    cursor: not-allowed;
    color: ${colors.lightGray};
    background-color: ${({ bgColor }) => bgColor === 'transparent' ? 'transparent' : colors.gray};
  }
`

const Button = ({
  type,
  onClick,
  borderRadius,
  text,
  fontSize,
  textColor,
  textColorHover,
  bgColor,
  bgColorHover,
  disabled
}) => (
  <ButtonElement
    type={type}
    onClick={onClick}
    borderRadius={borderRadius}
    fontSize={fontSize}
    textColor={textColor}
    textColorHover={textColorHover}
    bgColor={bgColor}
    bgColorHover={bgColorHover}
    disabled={disabled}
  >{text}</ButtonElement>
)

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  text: PropTypes.string,
  fontSize: PropTypes.string,
  textColor: PropTypes.string,
  textColorHover: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  borderRadius: '5px',
  fontSize: fontSizes.normal,
  textColor: colors.white,
  bgColor: colors.primaryColor,
  bgColorHover: colors.darkPrimaryColor
}

export default Button
