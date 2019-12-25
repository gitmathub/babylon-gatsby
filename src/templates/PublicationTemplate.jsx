import React from 'react'
import Layout from 'src/components/Layout'
import Publication from 'src/components/publication/Publication'

export default data => (
  <Layout>
    <Publication publication={data.pageContext.publication} />
  </Layout>
)
