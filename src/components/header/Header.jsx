import * as React from 'react'

import { Link } from 'gatsby'
import StarterLogo from 'src/assets/svg/starter-logo.svg'

import s from './Header.scss'

export const Header = ({ children }) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          <StarterLogo className={s.header__logoSvg} />
        </Link>

        <div className={s.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
)
