import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../../components/Layout/layout";

const DesignBuild = ({data}) => {

  const pageData = data.allPrismicDesignBuild.edges[0].node.data

  return (
    <Layout>
      <h1>{pageData.page_title.text}</h1>
      <main>
        {RichText.render(pageData.page_body.raw)}
      </main>
    </Layout>
  );
}

export default DesignBuild

export const query = graphql`
  query {
    allPrismicDesignBuild {
      edges {
        node {
          data {
            meta_description
            meta_title
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