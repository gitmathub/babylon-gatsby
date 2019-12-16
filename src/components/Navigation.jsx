import React from 'react'

export default () => (
  <nav>
    <div className="nav"></div>
  </nav>
)

const MenuPoints = () => (
  <div>
    <span> Kolonialismus</span>
    <span>Großstädte</span>
    <span>Kosmopolis</span>
    <span>Dichtung</span>
    <span>Blog</span>
  </div>
)

const HamburgerMenu = () => <span>E</span>

const MenuBar = () => <MenuPoints />
