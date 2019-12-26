import React from 'react'
import { Link } from 'gatsby'

export default ({ prop }) => (
  <div className={prop.style}>
    <Link to="/" className="nav__link" activeClassName="active">
      Home
    </Link>
    <Link to="/" className="nav__link" activeClassName="active">
      Verlagsprogramm
    </Link>
    <Link to="/" className="nav__link" activeClassName="active">
      Autoren
    </Link>
  </div>
)
