import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Framing-Construction.jpg"


const Safety = ({data}) => {
  
  const SafetyData = data.allPrismicSafety.nodes[0]
  
  return (
  <>
    <L2PagesLayout 
      title={`Safety`}
      subnav={`firm`}
      backgroundImage = {bgImage}
      content = {SafetyData.data.page_body}
    />
  </>
  
)
}

export const query = graphql`
  query SafetyQuery {
    allPrismicSafety {
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

export default Safety

