import * as React from 'react'
import { Link } from 'gatsby'
import Navigation from 'src/components/Navigation'

export default () => (
  <header className="header">
    <Title />
    <Navigation />
  </header>
)

const Title = () => (
  <div className="header__title">
    <Link to="/">Babylon Metropolis</Link>
  </div>
)
