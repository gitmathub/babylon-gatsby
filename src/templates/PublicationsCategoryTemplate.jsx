import React from 'react'
import Layout from 'src/components/Layout'
import PublicationsCategory from 'src/components/publication/PublicationsCategory'

export default data => (
  <Layout>
    <PublicationsCategory
      categoryName={data.pageContext.categoryName}
      publications={data.pageContext.publications}
    />
  </Layout>
)
