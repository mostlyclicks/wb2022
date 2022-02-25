import React from 'react'
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout/layout'
import { RichText } from "prismic-reactjs";


const Commitment = ({data}) => {

  const pageData = data.allPrismicCommitmen.edges[0];
  console.log(data.allPrismicCommitmen);

  return (
    <Layout>
      <h1>{pageData.node.data.page_title.text}</h1>
      <section>
        {RichText.render(pageData.node.data.page_body.raw)}
      </section>
    </Layout>
  );
}

export default Commitment

export const query = graphql`
query {
    allPrismicCommitmen {
      edges {
        node {
          data {
            meta_title
            meta_description
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
