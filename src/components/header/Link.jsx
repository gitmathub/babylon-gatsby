import * as React from 'react'

import { Link as InternalLink } from 'src/components/link/Link'

import s from './Link.scss'

export const Link = ({ name, to, icon }) => {
  const isLink = typeof to !== 'undefined'
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '')

  const content = () => (
    <>
      {icon && React.cloneElement(icon, { className: s.link__icon })}
      {name}
    </>
  )

  if (isExternal) {
    return (
      <a className={s.link} target="_blank" rel="noopener noreferrer" href={to}>
        {content()}
      </a>
    )
  }

  return (
    <InternalLink className={s.link} to={to}>
      {content()}
    </InternalLink>
  )
}
