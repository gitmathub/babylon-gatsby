import * as React from 'react'
import { Link } from 'gatsby'
import { createPublicationLink } from 'src/utils/permalink'

export default ({ publication }) => (
  <article className="pub">
    <h2>
      <Link to={createPublicationLink({ publicationTitle: publication.title })}>
        {publication.title}
      </Link>
    </h2>
    <h3 className="pub__subtitle">{publication.subtitle}</h3>
    <div className="pub__author-list">
      {publication.authors.map(({ titles, firstname, lastname }, index) => (
        <span className="pub__author" key={index}>
          {titles} {firstname} {lastname}
        </span>
      ))}
    </div>
    <div className="pub__abstract">{publication.abstract}</div>
  </article>
)
