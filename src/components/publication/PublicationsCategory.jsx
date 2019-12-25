import * as React from 'react'
import PublicationListItem from 'src/components/publication/PublicationListItem'

export default ({ categoryName, publications }) => (
  <main>
    <h1 className="pub-category">{categoryName}</h1>
    <div>
      {publications.map(({ node }, index) => (
        <PublicationListItem publication={node} key={index} />
      ))}
    </div>
  </main>
)
