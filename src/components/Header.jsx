import * as React from 'react'

import Navigation from 'src/components/Navigation'

export default () => (
  <header className="header">
    <Title />
    <Navigation />
  </header>
)

const Title = () => <div className="header__title">Babylon Metropolis</div>
