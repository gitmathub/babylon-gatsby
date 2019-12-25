const path = require('path')
const template = path.resolve('src/templates/PublicationsCategoryTemplate.jsx')

exports.createPageForEachCategory = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categories = await getCategories(graphql)

  const publicationsInCategory = await getPublicationsInCategory(
    graphql,
    categories
  )

  categories.data.allStrapiCategories.edges.forEach(({ node }) => {
    const path = node.slug
    const id = node.strapiId
    const categoryName = node.name
    const publications = publicationsInCategory[id]
    createPage({
      path,
      component: template,
      context: {
        categoryName,
        publications,
      },
    })
  })
}

function getCategories(graphql) {
  return graphql(`
    {
      allStrapiCategories {
        edges {
          node {
            id
            name
            slug
            strapiId
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors
    return result
  })
}

async function getPublicationsInCategory(graphql, categories, reporter) {
  let publicationsInCategory = {}
  const edges = categories.data.allStrapiCategories.edges
  for (const index in edges) {
    const id = edges[index].node.strapiId
    await graphql(`
      {
        allStrapiPublications(filter: { category: { id: { eq: ${id} } } }) {
          edges {
            node {
              id
              title
              subtitle
              authors {
                  firstname
                  lastname
                  titles
              }
              abstract
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) throw result.errors
      publicationsInCategory[id] = result.data.allStrapiPublications.edges
    })
  }
  return publicationsInCategory
}
