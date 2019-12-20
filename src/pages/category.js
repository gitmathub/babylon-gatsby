import React from 'react'
import Layout from 'src/components/Layout'
import { graphql } from 'gatsby'
import PublicationsCategory from 'src/components/publication/PublicationsCategory'

export default ({ data }) => {
  return (
    <Layout>
      <PublicationsCategory publications={data.allStrapiPublications.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiPublications(filter: { category: { id: { eq: 1 } } }) {
      edges {
        node {
          id
          title
          description
          category {
            name
            id
          }
        }
      }
    }
  }
`
