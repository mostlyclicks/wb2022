import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from '../../components/Layout/layout'

const ServicesIndex = ({data}) => {

  const pageData = data.allPrismicServices.edges[0].node.data

  return (
    <Layout>
      <h1>{pageData.page_title.text}</h1>
      <main>
        {RichText.render(pageData.page_body.raw)}
      </main>
    </Layout>
  )
}

export default ServicesIndex

export const query = graphql`
  query {
    allPrismicServices {
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
