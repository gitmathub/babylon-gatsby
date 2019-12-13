import * as React from 'react'

import { Link } from 'gatsby'

import s from './Header.scss'

export const Header = ({ children }) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          Babylon Metropolis Verlag
        </Link>

        <div className={s.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
)
