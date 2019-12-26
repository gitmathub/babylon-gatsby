import React from 'react'
import { Link } from 'gatsby'

export default ({ prop }) => (
  <div className={prop.style}>
    <Link to="/kolonialismus" className="nav__link" activeClassName="active">
      Kolonialismus
    </Link>
    <Link to="/grossstaedte" className="nav__link" activeClassName="active">
      Großstädte
    </Link>
    <Link to="/kosmopolis" className="nav__link" activeClassName="active">
      Kosmopolis
    </Link>
    <Link to="/dichtung" className="nav__link" activeClassName="active">
      Dichtung
    </Link>
    <a href="https://babylonmetropolis.wordpress.com" className="nav__link">
      Blog
    </a>
  </div>
)
