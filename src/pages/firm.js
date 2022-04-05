import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from "prismic-reactjs";
import Layout from '../components/Layout/Layout'

const Firm = ({data}) => {

  const pageData = data.allPrismicOurFirm.edges[0]


  return (
    <Layout>
      <h1>{pageData.node.data.page_title.text}</h1>
      <main>
        {RichText.render(pageData.node.data.page_body.raw)}
      </main>
      
    </Layout>
  )
}

export default Firm


export const query = graphql`
  query MyQuery {
    allPrismicOurFirm {
      edges {
        node {
          data {
            meta_title
            meta_description
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
`;
