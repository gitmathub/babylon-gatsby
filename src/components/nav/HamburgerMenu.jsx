import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav className="hamburger-menu">
    <input
      type="checkbox"
      className="hamburger-menu__checkbox"
      id="navi-toggle"
    />
    <label htmlFor="navi-toggle" className="hamburger-menu__button">
      <span className="hamburger-menu__icon">☰</span>
    </label>
    <div className="hamburger-menu__background">&nbsp;</div>
    <div className="hamburger-menu__nav">
      <ul className="hamburger-menu__list">
        <li className="hamburger-menu__item">
          <Link
            to="/"
            className="hamburger-menu__link"
            activeClassName="active"
          >
            Home
          </Link>
        </li>
        <li className="hamburger-menu__item">
          <Link
            to="/kolonialismus"
            className="hamburger-menu__link"
            activeClassName="active"
          >
            Kolonialismus
          </Link>
        </li>
        <li className="hamburger-menu__item">
          <Link
            to="/grossstaedte"
            className="hamburger-menu__link"
            activeClassName="active"
          >
            Großstädte
          </Link>
        </li>
        <li className="hamburger-menu__item">
          <Link
            to="/kosmopolis"
            className="hamburger-menu__link"
            activeClassName="active"
          >
            Kosmopolis
          </Link>
        </li>
        <li className="hamburger-menu__item">
          <Link
            to="/dichtung"
            className="hamburger-menu__link"
            activeClassName="active"
          >
            Dichtung
          </Link>
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
