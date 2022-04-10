import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/ABC-wi.jpg"

const ProfessionalAffiliations = ({data}) => {
  
  const ProfAffData = data.allPrismicProfessionalAffiliations.nodes[0];
  
  return (
  <>
    <L2PagesLayout 
      title={`Professional Affiliations`}
      subnav={`firm`}
      backgroundImage={bgImage}
      content = {ProfAffData.data.page_body}
    />
  </>

)
}

export const query = graphql`
  query ProfAffQuery {
    allPrismicProfessionalAffiliations {
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

export default ProfessionalAffiliations