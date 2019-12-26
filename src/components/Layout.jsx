import * as React from 'react'
import Helmet from 'react-helmet'

import { helmet } from 'src/utils/helmet'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import 'src/styles/main.scss'

export default ({ children }) => (
  <div className="layout">
    <Helmet {...helmet} />
    <div className="page-wrap">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)
