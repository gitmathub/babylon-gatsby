import * as React from 'react'
import { Link } from 'gatsby'
import { createAuthorPageLink } from 'src/utils/permalink'

export default ({ titles = '', firstname, lastname, className }) => (
  <Link
    to={createAuthorPageLink({ firstname, lastname })}
    className={className}
  >
    {titles} {firstname} {lastname}
  </Link>
)
