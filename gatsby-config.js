/**
 * Configure your Gatsby: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/next`,
  plugins: [
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        DisallowSymLinks: true,
        // SymLinksIfOwnerMatch: true,
        redirect: [`RewriteRule ^deploy http://localhost:65331/deploy [P]`],
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-root-import',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:65332`,
        queryLimit: 1000,
        contentTypes: [`publications`, `categories`, `authors`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
  ],
}
