import React from 'react'
import { Link } from 'gatsby'
import MenuBar from 'src/components/nav/MenuBar'
import SecondaryMenuBar from 'src/components/nav/SecondaryMenuBar'
const thisYear = new Date().getFullYear()

export default () => (
  <footer>
    <div>
      <Link to="/imprint" className="footer__link">
        (c) 1997 - {thisYear} &nbsp; Babylon Metropolis Verlag
      </Link>
      <Link to="/imprint" className="footer__link" activeClassName="active">
        Impressum
      </Link>
    </div>
    <MenuBar prop={{ style: 'nav__footer' }} />
    <SecondaryMenuBar prop={{ style: 'nav__footer' }} />
  </footer>
)
