import React from 'react'

export default () => (
  <nav>
    <div className="nav_switcher">
      <HamburgerMenu />
      <MenuBar />
    </div>
  </nav>
)

const HamburgerMenu = () => (
  <nav className="hamburger-menu">
    <input
      type="checkbox"
      className="hamburger-menu__checkbox"
      id="navi-toggle"
    />
    <label for="navi-toggle" className="hamburger-menu__button">
      <span className="hamburger-menu__icon">☰</span>
    </label>
    <div className="hamburger-menu__background">&nbsp;</div>
    <div className="hamburger-menu__nav">
      <ul className="hamburger-menu__list">
        <li className="hamburger-menu__item">
          <a href="#" className="hamburger-menu__link">
            Kolonialismus
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="#" className="hamburger-menu__link">
            Großstädte
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="#" className="hamburger-menu__link">
            Kosmopolis
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="#" className="hamburger-menu__link">
            Dichtung
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="#" className="hamburger-menu__link">
            Blog
          </a>
        </li>
      </ul>
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
