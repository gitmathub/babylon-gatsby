import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import AuthorsSection from 'src/components/author/AuthorsSection'
import PublicationLink from 'src/components/publication/PublicationLink'

export default ({ publication }) => {
  const { abstract, authors, subtitle, title } = publication

  return (
    <article className="pub">
      <h2>
        <PublicationLink title={title} />
      </h2>
      <h3>{subtitle}</h3>
      <AuthorsSection authors={authors} />
      <ReactMarkdown escapeHtml={false} className="layout__floating-text">
        {abstract}
      </ReactMarkdown>
    </article>
  )
}
