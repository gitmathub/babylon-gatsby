const path = require('path')

// FIXME: clean up
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const categories = await graphql(`
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
  `)
  if (categories.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  let itemList = {}
  const edges = categories.data.allStrapiCategories.edges
  for (const index in edges) {
    const id = edges[index].node.strapiId
    const result = await graphql(`
      {
        allStrapiPublications(filter: { category: { id: { eq: ${id} } } }) {
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
    `)
    itemList[id] = result.data.allStrapiPublications.edges
  }

  // Create pages for each category
  const template = path.resolve(`src/templates/PublicationsCategory.jsx`)

  categories.data.allStrapiCategories.edges.forEach(({ node }) => {
    const path = node.slug
    const id = node.strapiId
    const contents = itemList[id]
    createPage({
      path,
      component: template,
      context: {
        contents,
      },
    })
  })
}
