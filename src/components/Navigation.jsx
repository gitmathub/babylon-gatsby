import React from 'react'

// export default () => (
//   <nav>
//     <div className="nav_switcher">
//       <HamburgerMenu />
//       <MenuBar />
//     </div>
//   </nav>
// )

// export default () => <div className="navigation">HALLO</div>
export default () => (
  <nav className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" className="navigation__button">
      <span className="navigation__icon">☰</span>
    </label>
    <div className="navigation__background">&nbsp;</div>
    <div className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Kolonialismus
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Großstädte
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Kosmopolis
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Dichtung
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
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
