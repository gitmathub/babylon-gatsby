import * as React from 'react'
import PublicationListItem from 'src/components/publication/PublicationListItem'
// import s from './publication.scss'

export default ({ publications }) => (
  <main>
    <h1>Neuerscheinungen</h1>

    {publications.map(({ node }, index) => (
      <div key={index}>
        {/* {node.title} */}
        <PublicationListItem publication={node} />
      </div>
    ))}
  </main>
)
