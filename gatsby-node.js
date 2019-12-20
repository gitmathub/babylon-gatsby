const path = require('path')
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
    console.log('z', index, edges[index].node.id)
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
    console.log('result', result)
    console.log('itemList', result.data.allStrapiPublications.edges)
    itemList[id] = result.data.allStrapiPublications.edges
  }

  // Create pages for each category
  const template = path.resolve(`src/templates/category-item-list.js`)

  categories.data.allStrapiCategories.edges.forEach(({ node }) => {
    console.log('node', node)
    const path = node.slug
    const id = node.strapiId
    const contents = itemList[id]
    console.log('contents', contents)
    createPage({
      path,
      component: template,
      context: {
        contents,
      },
    })
  })
}
