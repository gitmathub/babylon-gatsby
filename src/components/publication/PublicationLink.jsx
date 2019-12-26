import * as React from 'react'
import { Link } from 'gatsby'
import { createPublicationLink } from 'src/utils/permalink'

export default ({ title, linkName = '', className = '' }) => {
  const text = linkName ? linkName : title

  return (
    <Link to={createPublicationLink({ title })} className={className}>
      {text}
    </Link>
  )
}
