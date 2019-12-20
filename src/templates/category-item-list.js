import React from 'react'
import Layout from 'src/components/layout'
import PublicationsCategory from 'src/components/publication/PublicationsCategory'

export default data => {
  console.log('data', data)
  return (
    <Layout>
      <div>Hello blog post</div>
      <div>Path: {data.path}</div>
      {/* <div>PageContext: {JSON.stringify(data.pageContext.contents)}</div> */}
      {/* //   <div>Context: {JSON.stringify(data)}</div> */}
      <PublicationsCategory publications={data.pageContext.contents} />
    </Layout>
  )
}
