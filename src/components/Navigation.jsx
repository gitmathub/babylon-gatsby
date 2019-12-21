import React from 'react'

export default () => (
  <nav>
    <div className="navigation">
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
          <a href="/kolonialismus" className="hamburger-menu__link">
            Kolonialismus
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="/grossstaedte" className="hamburger-menu__link">
            Großstädte
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="/kosmopolis" className="hamburger-menu__link">
            Kosmopolis
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a href="/dichtung" className="hamburger-menu__link">
            Dichtung
          </a>
        </li>
        <li className="hamburger-menu__item">
          <a
            href="https://babylonmetropolis.wordpress.com"
            className="hamburger-menu__link"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

const MenuBar = () => (
  <div className="menu-bar">
    <a href="/kolonialismus" className="menu-bar__link">
      Kolonialismus
    </a>
    <a href="/grossstaedte" className="menu-bar__link">
      Großstädte
    </a>
    <a href="/kosmopolis" className="menu-bar__link">
      Kosmopolis
    </a>
    <a href="/dichtung" className="menu-bar__link">
      Dichtung
    </a>
    <a
      href="https://babylonmetropolis.wordpress.com"
      className="menu-bar__link"
    >
      Blog
    </a>
  </div>
)
