import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem/MenuItem'
import MenuButton from '../MenuButton/MenuButton'
import breakpoints from '../../../utils/breakpoints'

const MenuItems = styled.nav`
  height: 100%;
  white-space: nowrap;
  
  @media screen and (max-width: ${breakpoints.largeTablet}) {
    position: absolute;
    top: 60px;
    ${({ rightSide }) => rightSide ? { right: 0 } : { left: 0 }};
    display: flex;
    flex-direction: column;
    height: ${({ itemCount }) => itemCount * 60}px;
    white-space: initial;
    transform: translateX(${({ rightSide }) => rightSide ? 100 : -100}%);
    transition: transform .2s ease-in;
    
    ${({ isActive }) => isActive && ({ transform: 'translateX(0)' })}
  }
`

const MenuButtonWrapper = styled.div`
  padding: 0 10px;
  display: none;
  
  @media screen and (max-width: ${breakpoints.largeTablet}) {
    display: block;
  }
`

const Menu = ({ items, rightSide }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  document.addEventListener('click', ({ target }) => {
    if (menuOpen && !target.closest('.header')) {
      setMenuOpen(false)
    }
  })

  return (
    <>
      <MenuItems itemCount={items.length} rightSide={rightSide} isActive={menuOpen}>
        {
          items.map(({ text, action, active, width, disabled }) =>
            <MenuItem
              key={text}
              text={text}
              action={action}
              rightSide={rightSide}
              active={active}
              disabled={disabled}
              width={width}
            />)
        }
      </MenuItems>
      <MenuButtonWrapper>
        <MenuButton isActive={menuOpen} onClick={() => setMenuOpen(prevState => !prevState)} />
      </MenuButtonWrapper>
    </>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  rightSide: PropTypes.bool
}

export default Menu
