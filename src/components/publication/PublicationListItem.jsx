import * as React from 'react'

// import s from './publication.scss'

export default ({ publication }) => (
  <article className="pub-list-item">
    <h2>{publication.title}</h2>
    <h3 className="pub-list-item__subtitle">{publication.subtitle}</h3>
    <div className="pub-list-item__author-list">
      {publication.authors.map(({ titles, firstname, lastname }, index) => (
        <span className="pub-list-item__author" key={index}>
          {titles} {firstname} {lastname}
        </span>
      ))}
    </div>
    <div className="pub-list-item__abstract">{publication.abstract}</div>
  </article>
)
