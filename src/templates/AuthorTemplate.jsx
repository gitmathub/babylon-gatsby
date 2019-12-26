import React from 'react'
import Layout from 'src/components/Layout'
import Author from 'src/components/author/Author'

export default data => (
  <Layout>
    <Author author={data.pageContext.author} />
  </Layout>
)
