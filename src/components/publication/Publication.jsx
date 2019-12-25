import * as React from 'react'

export default ({ publication }) => (
  <article className="pub">
    <h1>{publication.title}</h1>
    <h3 className="pub__subtitle">{publication.subtitle}</h3>
    <div className="pub__author-list">
      {publication.authors.map(({ titles, firstname, lastname }, index) => (
        <span className="pub__author" key={index}>
          {titles} {firstname} {lastname}
        </span>
      ))}
    </div>
    <div className="pub__abstract">{publication.description}</div>
  </article>
)
