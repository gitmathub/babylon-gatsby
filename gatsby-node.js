const publicationsCategory = require('./src/page-creators/publications-category-creator')

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    publicationsCategory.createPageForEachCategory({
      graphql,
      actions,
    }),
  ])
}
