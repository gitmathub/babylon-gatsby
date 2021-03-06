import React from 'react'
import Layout from 'src/components/Layout'
import { graphql } from 'gatsby'
import PublicationsListing from 'src/components/publication/PublicationsListing'

export default ({ data }) => {
  return (
    <Layout>
      <PublicationsListing
        title="Neuerscheinungen"
        publications={data.allStrapiPublications.edges}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiPublications(
      filter: { is_featured: { eq: true } }
      sort: { fields: release_date, order: DESC }
    ) {
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
