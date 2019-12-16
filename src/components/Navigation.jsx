import React from 'react'

export default () => (
  <nav>
    <div className="nav">
      <HamburgerMenu />
      <MenuBar />
    </div>
  </nav>
)

const MenuBar = () => (
  <div className="nav__menu-bar">
    <span>Kolonialismus</span>
    <span>Großstädte</span>
    <span>Kosmopolis</span>
    <span>Dichtung</span>
    <span>Blog</span>
  </div>
)

const HamburgerMenu = () => <button className="nav__hambuger">☰</button>
