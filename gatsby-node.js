const publicationsCategory = require('./src/page-creators/publications-category-creator')
const publication = require('./src/page-creators/publication-creator')
const author = require('./src/page-creators/author-creator')

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    publicationsCategory.createPageForEachCategory({
      graphql,
      actions,
    }),
    publication.createPageForPublication({
      graphql,
      actions,
    }),
    author.createPageForAuthor({
      graphql,
      actions,
    }),
  ])
}
