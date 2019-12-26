import * as React from 'react'
import { Link } from 'gatsby'
import { createPublicationLink } from 'src/utils/permalink'
import ReactMarkdown from 'react-markdown'

export default ({ publication }) => (
  <article className="pub">
    <h2>
      <Link to={createPublicationLink({ publicationTitle: publication.title })}>
        {publication.title}
      </Link>
    </h2>
    <h3>{publication.subtitle}</h3>
    <div className="pub__author-list">
      {publication.authors.map(({ titles, firstname, lastname }, index) => (
        <span className="pub__author" key={index}>
          {titles} {firstname} {lastname}
        </span>
      ))}
    </div>
    <ReactMarkdown escapeHtml={false} className="layout__floating-text">
      {publication.abstract}
    </ReactMarkdown>
  </article>
)
