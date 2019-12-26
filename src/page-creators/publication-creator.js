const path = require('path')
const template = path.resolve('src/templates/PublicationTemplate.jsx')
const permalink = require('../utils/permalink')

exports.createPageForPublication = async ({ graphql, actions }) => {
  const { createPage } = actions

  const publication = await getPublications(graphql)

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

function getPublications(graphql) {
  return graphql(`
    {
      allStrapiPublications {
        edges {
          node {
            abstract
            authors {
              firstname
              lastname
              titles
            }
            description
            is_sold_out
            isbn
            issn
            price
            properties
            release_date
            size
            strapiId
            subtitle
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors
    return result
  })
}
