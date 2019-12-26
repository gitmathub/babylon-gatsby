import * as React from 'react'
import AuthorLink from 'src/components/author/AuthorLink'

export default ({ authors }) => {
  if (!authors && !authors.length) return null

  return (
    <section className="author__section-list">
      {authors.map(({ titles, firstname, lastname }, index) => (
        <AuthorLink
          titles={titles}
          firstname={firstname}
          lastname={lastname}
          className="author__name"
          key={index}
        />
      ))}
    </section>
  )
}
