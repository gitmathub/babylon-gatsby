import * as React from 'react'

// import s from './publication.scss'

export default ({ publication }) => (
  <article>
    <h2>{publication.title}</h2>
    <div>{publication.description}</div>
  </article>
)
