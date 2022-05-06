import React from 'react'
import { graphql } from "gatsby";
import L2PagesLayout from "../components/l2-page-template";
import SEO from "../components/seo";
import bgImage from "../images/WieserBrothers-commitment-DJI_0770.jpg";
// import { RichText } from "prismic-reactjs";


const Commitment = ({data}) => {

  const pageData = data.allPrismicCommitmen.edges[0];
  console.log(data.allPrismicCommitmen);

  return (
    <>
      <SEO title="Our Commitment" />
      <L2PagesLayout
        title={pageData.node.data.page_title.text}
        subnav={`commitment`}
        backgroundImage={bgImage}
        content={pageData.node.data.page_body.raw}
      />
    </>
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
