import React from 'react'
import Layout from 'src/components/Layout'
import PublicationsCategory from 'src/components/publication/PublicationsCategory'

// Used by /gatsby-node.js

export default data => {
  return (
    <Layout>
      <PublicationsCategory
        categoryName={data.pageContext.categoryName}
        publications={data.pageContext.contents}
      />
    </Layout>
  )
}
