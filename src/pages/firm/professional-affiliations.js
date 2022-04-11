import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/ABC-wi.jpg"

const ProfessionalAffiliations = ({data}) => {
  
  const pageData = data.allPrismicProfessionalAffiliations.edges[0].node.data
  
  return (
  <>
    <L2PagesLayout 
      title={`Professional Affiliations`}
      subnav={`firm`}
      backgroundImage={bgImage}
      content = {pageData.page_body.raw}
    />
  </>

)
}

export const query = graphql`
  query ProfAffQuery {
    allPrismicProfessionalAffiliations {
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

export default ProfessionalAffiliations