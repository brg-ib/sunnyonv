import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setCountry } from '../../store/actions/news'
import Menu from './Menu/Menu'
import LanguageMenu from './LanguageMenu/LanguageMenu'
import colors from '../../utils/colors'
import IconButton from '../../components/IconButton/IconButton'

import { GlobalStyles } from '../../utils/globalStyles'
import { lightTheme, darkTheme } from '../../utils/Themes'

const swIcon = require('../../assets/switch.svg')

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: ${colors.primaryColor};
  border-bottom: 1px solid ${colors.darkSecondaryColor};
  z-index: 50;
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Header = ({ country, setCountry }) => {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const { t } = useTranslation()
  const history = useHistory()
  const [activePath, setActivePath] = useState(history.location.pathname)

  history.listen(location => {
    setActivePath(location.pathname)
  })

  const navItems = [
    {
      text: t('topNews'),
      action: () => history.push('/'),
      active: activePath === '/'
    },
    {
      text: t('categories'),
      action: () => history.push('/categories'),
      active: activePath.includes('/categories') || activePath.includes('/category')
    },
    {
      text: t('search'),
      action: () => history.push('/search'),
      active: activePath.includes('/search')
    }
  ]
  const langItems = [
    {
      text: t('frHeader'),
      action: () => setCountry('fr'),
      active: country === 'fr',
      disabled: activePath.includes('/article'),
      width: 'fit-content'
    },
    {
      text: t('usHeader'),
      action: () => setCountry('us'),
      active: country === 'us',
      disabled: activePath.includes('/article'),
      width: 'fit-content'
    }
  ]

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <HeaderContainer className="header">
          <Menu items={navItems} />
          <RightSide>
            <IconButton
              icon = {swIcon}
              iconHeight="35px"
              margin="5px 0px"
              onClick={themeToggler}
            />
            <LanguageMenu />
            <Menu items={langItems} rightSide />
          </RightSide>
        </HeaderContainer>
      </>
    </ThemeProvider>

  )
}

Header.propTypes = {
  country: PropTypes.string,
  setCountry: PropTypes.func
}

const mapStateToProps = ({ news: { country } }) => ({ country })

const mapDispatchToProps = dispatch => ({
  setCountry: country => dispatch(setCountry(country))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
