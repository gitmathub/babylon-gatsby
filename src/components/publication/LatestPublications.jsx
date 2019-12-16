import * as React from 'react'
import Publication from 'src/components/publication/Publication'
// import s from './publication.scss'

export default ({ publications }) => (
  <main>
    <h1>Neuerscheinungen</h1>

    {publications.map(({ node }, index) => (
      <div key={index}>
        {/* {node.title} */}
        <Publication publication={node} />
      </div>
    ))}
  </main>
)
