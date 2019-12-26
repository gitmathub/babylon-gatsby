import React from 'react'
import Layout from 'src/components/Layout'
import PublicationsListing from 'src/components/publication/PublicationsListing'

export default data => (
  <Layout>
    <PublicationsListing
      title={data.pageContext.categoryName}
      publications={data.pageContext.publications}
    />
  </Layout>
)
