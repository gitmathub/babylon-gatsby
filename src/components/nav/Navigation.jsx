import React from 'react'
import HamburgerMenu from 'src/components/nav/HamburgerMenu'
import MenuBar from 'src/components/nav/MenuBar'

export default () => (
  <nav>
    <div>
      <HamburgerMenu />
      <MenuBar prop={{ style: 'nav__menu-bar nav__top' }} />
    </div>
  </nav>
)
