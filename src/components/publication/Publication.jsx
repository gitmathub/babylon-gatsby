import * as React from 'react'
import ReactMarkdown from 'react-markdown'

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

    <ReactMarkdown escapeHtml={false} className="pub__abstract">
      {getText(publication.description, publication.abstract)}
    </ReactMarkdown>
    <div>{publication.price}€</div>
    <div>{publication.isbn}</div>
    <div>{publication.issn}</div>
    <div>{publication.size}</div>
    <div>{publication.is_sold_out}</div>
    <div>{publication.properties}</div>
  </article>
)

const getText = (description, abstract) =>
  description ? description : abstract
