import * as React from 'react'

import { Container } from 'src/components/container/Container'

import s from './Footer.scss'

export const Footer = ({ logo, social = [] }) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a
          href="https://babylon-metropolis.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          {logo}
        </a>

        <ul className={s.footer__list}>
          {social.map(item => (
            <li key={item.to} className={s.footer__item}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
)
