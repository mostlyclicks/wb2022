import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../../components/Layout/Layout";

const GeneralContracting = ({data}) => {

  const pageData = data.allPrismicGeneralContracting.edges[0].node.data

  return (
    <Layout>
      <h1>{pageData.page_title.text}</h1>
      <main>
        {RichText.render(pageData.page_body.raw)}
      </main>
    </Layout>
  )
}

export default GeneralContracting

export const query = graphql`
  query {
    allPrismicGeneralContracting {
      edges {
        node {
          data {
            page_title {
              text
            }
            page_body {
              raw
            }
          }
        }
      }
    }
  }
`;


