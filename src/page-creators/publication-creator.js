const path = require('path')
const template = path.resolve('src/templates/PublicationTemplate.jsx')
const permalink = require('../utils/permalink')

exports.createPageForPublication = async ({ graphql, actions }) => {
  const { createPage } = actions

  const publication = await getPublication(graphql, 1)

  publication.data.allStrapiPublications.edges.forEach(({ node }) => {
    const publication = node
    const path = permalink.createPublicationLink({
      publicationTitle: publication.title,
    })
    createPage({
      path,
      component: template,
      context: {
        publication,
      },
    })
  })
}

function getPublication(graphql, strapiId) {
  return graphql(`
    {
      allStrapiPublications(filter: { strapiId: { eq: ${strapiId} } }) {
        edges {
          node {
            title
            subtitle
            strapiId
            size
            release_date
            properties
            price
            issn
            isbn
            is_sold_out
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
  `).then(result => {
    if (result.errors) throw result.errors
    return result
  })
}
