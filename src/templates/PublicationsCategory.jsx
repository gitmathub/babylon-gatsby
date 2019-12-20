import React from 'react'
import Layout from 'src/components/Layout'
import PublicationsCategory from 'src/components/publication/PublicationsCategory'

export default data => {
  return (
    <Layout>
      <PublicationsCategory publications={data.pageContext.contents} />
    </Layout>
  )
}
