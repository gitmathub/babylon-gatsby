const path = require('path')
const template = path.resolve('src/templates/AuthorTemplate.jsx')
const permalink = require('../utils/permalink')

exports.createPageForAuthor = async ({ graphql, actions }) => {
  const { createPage } = actions

  const authors = await getAuthors(graphql)

  authors.data.allStrapiAuthors.edges.forEach(({ node }) => {
    const author = node
    const path = permalink.createAuthorPageLink({
      firstname: author.firstname,
      lastname: author.lastname,
    })
    createPage({
      path,
      component: template,
      context: {
        author,
      },
    })
  })
}

function getAuthors(graphql) {
  return graphql(`
    {
      allStrapiAuthors(sort: { fields: lastname }) {
        edges {
          node {
            strapiId
            firstname
            lastname
            titles
            publications {
              title
              subtitle
            }
            info
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors
    return result
  })
}
