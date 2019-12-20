import * as React from 'react'
import Publication from 'src/components/publication/Publication'
// import s from './publication.scss'

export default ({ publications }) => (
  <main>
    {publications.map(({ node }, index) => (
      <div key={index}>
        <h1>{node.category.name}</h1>
        <Publication publication={node} />
      </div>
    ))}
  </main>
)
