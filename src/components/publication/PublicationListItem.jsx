import * as React from 'react'

// import s from './publication.scss'

export default ({ publication }) => (
  <article className="publication-list-item">
    <h2>{publication.title}</h2>
    <h3>{publication.subtitle}</h3>
    <h3>{publication.author}</h3>
    <div>{publication.abstract}</div>
  </article>
)
