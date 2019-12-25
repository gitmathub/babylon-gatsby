import React from 'react'
import Layout from 'src/components/Layout'
import { graphql } from 'gatsby'
import PublicationsFeatured from 'src/components/publication/PublicationsFeatured'

export default ({ data }) => {
  return (
    <Layout>
      <PublicationsFeatured publications={data.allStrapiPublications.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiPublications(filter: { is_featured: { eq: true } }) {
      edges {
        node {
          id
          title
          subtitle
          abstract
          authors {
            firstname
            lastname
            titles
          }
        }
      }
    }
  }
`
