import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Sustainability.jpg"

const Sustainability = ({data}) => {
  
  const pageData = data.allPrismicSustainability.edges[0].node.data

  return (
  <>
    <L2PagesLayout 
      title= {`Sustainability`}
      subnav={`firm`}
      backgroundImage = {bgImage}
      content = {pageData.page_body.raw}
    
    />
  </>

)
}

export const query = graphql`
  query SustainabilityQuery {
    allPrismicSustainability {
      edges {
        node {
          data {
            meta_description
            meta_title
            page_body {
              raw
            }
            page_title {
              raw
            }
          }
        }
      }
    }
  }
`;

export default Sustainability