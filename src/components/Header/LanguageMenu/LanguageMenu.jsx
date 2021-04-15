import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import IconButton from '../../IconButton/IconButton'
import colors from '../../../utils/colors'

const frIcon = require('../../../assets/fr-icon.svg')
const enIcon = require('../../../assets/en-icon.svg')

const MenuWrapper = styled.div`
  position: relative;
  margin-right: 20px;
`

const Dropdown = styled.div`
  position: absolute;
  top: 55px;
  left: -6px;
  padding: 5px;
  border: 1px solid ${colors.black};
  background-color: ${colors.primaryColor};
  opacity: 0;
  visibility: hidden;
  transition: opacity .2s, visibility .2s;
  
  ${({ isOpen }) => isOpen && { visibility: 'visible', opacity: 1 }}
`

const LanguageMenu = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const availableLanguages = [
    { code: 'en', icon: enIcon },
    { code: 'fr', icon: frIcon }
  ]

  const handleChange = code => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  document.addEventListener('click', ({ target }) => {
    if (!target.closest('.language-menu')) {
      setIsOpen(false)
    }
  })

  return (
    <MenuWrapper className="language-menu">
      <IconButton
        icon={availableLanguages.find(lang => lang.code === i18n.language).icon}
        iconHeight="40px"
        margin="5px 0 0"
        onClick={() => setIsOpen(prevState => !prevState)}
      />
      <Dropdown isOpen={isOpen}>
        {availableLanguages.map(lang =>
          (lang.code !== i18n.language &&
            <IconButton
              key={lang.code}
              icon={lang.icon}
              iconHeight="40px"
              margin="5px 0"
              onClick={() => handleChange(lang.code)}
            />
          ))}
      </Dropdown>
    </MenuWrapper>
  )
}

export default LanguageMenu
