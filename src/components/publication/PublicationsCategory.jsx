import * as React from 'react'
import PublicationListItem from 'src/components/publication/PublicationListItem'

export default ({ categoryName, publications }) => (
  // console.log("name", categoryName)
  <main>
    <h1>{categoryName}</h1>
    {publications.map(({ node }, index) => (
      <div key={index}>
        <PublicationListItem publication={node} />
      </div>
    ))}
  </main>
)
