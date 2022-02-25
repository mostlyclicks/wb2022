import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from '../components/Layout/layout'

const PrivacyPolicy = ({data}) => {


  const pageData = data.allPrismicPrivacyPolicy.edges[0].node.data

  return (
    <Layout>
      <h1>{pageData.page_title.text}</h1>
      <main>
        {RichText.render(pageData.page_body.raw)}
      </main>
    </Layout>
  )
}

export default PrivacyPolicy

export const query = graphql`
query {
  allPrismicPrivacyPolicy {
    edges {
      node {
        data {
          page_body {
            raw
          }
          page_title {
            text
          }
        }
      }
    }
  }
}
`

