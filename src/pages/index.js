import React from 'react'
import Layout from 'src/components/Layout'
import { graphql } from 'gatsby'
import FeaturedPublications from 'src/components/publication/FeaturedPublications'

export default ({ data }) => {
  return (
    <Layout>
      <FeaturedPublications publications={data.allStrapiPublications.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiPublications {
      edges {
        node {
          id
          title
          abstract
          description
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
