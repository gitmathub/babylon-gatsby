import React from 'react'
import { Link } from 'gatsby'

const thisYear = new Date().getFullYear()

export default () => (
  <footer>
    <Link to="/imprint" className="footer__link">
      (c) 1997 - {thisYear} &nbsp; Babylon Metropolis Verlag
    </Link>
    <Link to="/imprint" className="footer__link">
      Impressum
    </Link>
  </footer>
)
