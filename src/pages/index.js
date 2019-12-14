import React from 'react'
import Layout from 'src/components/layout/Layout'
import { graphql } from 'gatsby'
import LatestPublications from 'src/components/publication/LatestPublications'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Neuerscheinungen</div>
      <LatestPublications publications={data.allStrapiPublications.edges} />
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
          description
        }
      }
    }
  }
`
