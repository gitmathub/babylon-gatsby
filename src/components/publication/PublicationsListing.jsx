import * as React from 'react'
import PublicationListItem from 'src/components/publication/PublicationListItem'

export default ({ title, publications }) => (
  <main>
    <h1 className="pub__title">{title}</h1>
    <div>
      {publications.map(({ node }, index) => (
        <PublicationListItem publication={node} key={index} />
      ))}
    </div>
  </main>
)
