import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import L2PagesLayout from "../../components/l2-page-template";
import bgImage from "../../images/wb-planning2.jpg";

const GeneralContracting = ({data}) => {

  const pageData = data.allPrismicGeneralContracting.edges[0].node.data

  return (
    <L2PagesLayout 
      title={pageData.page_title.text}
      subnav={`services`}
      backgroundImage={bgImage}
      content={pageData.page_body.raw}
    />
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


