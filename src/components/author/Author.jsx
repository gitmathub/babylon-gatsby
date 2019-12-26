import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { createPublicationLink } from 'src/utils/permalink'
import { Link } from 'gatsby'

export default ({ author }) => {
  const { firstname, lastname, titles, publications, info } = author

  return (
    <article>
      <h1>
        {titles} {firstname} {lastname}
      </h1>
      <Info info={info} />
      <h3 className="author__publications">
        Bücher erschienen bei Babylon Metroplolis Studies:
      </h3>
      <PublicationLinks publications={publications} />
    </article>
  )
}

const Info = ({ info }) => {
  if (!info) return null
  return (
    <ReactMarkdown escapeHtml={false} className="layout__floating-text">
      {info}
    </ReactMarkdown>
  )
}

const PublicationLinks = ({ publications }) => {
  if (!publications && !publications.length) return null

  return (
    <section className="layout__floating-text">
      <ul>
        {publications.map(publication => (
          <li>
            <Link
              to={createPublicationLink({
                publicationTitle: publication.title,
              })}
            >
              {publication.title} - {publication.subtitle}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
