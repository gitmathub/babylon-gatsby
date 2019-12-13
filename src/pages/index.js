import React from 'react'
import Layout from 'src/components/layout/Layout'
import { graphql } from 'gatsby'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello world!</div>
      <div>
        {data.allStrapiPublications.edges.map(({ node }, index) => (
          <div key={index}>
            <h2>{node.title}</h2>
          </div>
        ))}
      </div>
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
