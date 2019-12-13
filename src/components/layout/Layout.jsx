import * as React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Logo from 'src/assets/svg/ueno-logo.svg'

import { helmet } from 'src/utils/helmet'
import { Header } from 'src/components/header/Header'
import { Footer } from 'src/components/footer/Footer'
// import { Devtools } from "src/components/devtools/Devtools"

import s from './Layout.scss'

const isDev = process.env.NODE_ENV === 'development'

export default ({ children }) => (
  <div className={s.layout}>
    <Helmet {...helmet} />
    <Header>
      <Link name="about" to="/about" />
      ddd
      {/* <HeaderLink
        name="github"
        to="https://www.babylon-metropolis.de"
        icon={<Github />}
      /> */}
    </Header>
    sss
    {children}
    <Footer
    //   logo={<Logo />}
    //   social={[
    //     { icon: <Blog />, to: "https://babylonmetropolis.wordpress.com" },
    //   ]}
    />
  </div>
)
