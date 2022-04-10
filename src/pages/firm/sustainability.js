import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Sustainability.jpg"

const Sustainability = ({data}) => {
  
  const SustainabilityData = data.allPrismicSustainability.nodes[0]

  return (
  <>
    <L2PagesLayout 
      title= {`Sustainability`}
      subnav={`firm`}
      backgroundImage = {bgImage}
      content = {SustainabilityData.data.page_body}
    
    />
  </>

)
}

export const query = graphql`
  query SustainabilityQuery {
    allPrismicSustainability {
      nodes {
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
`;

export default Sustainability