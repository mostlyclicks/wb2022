import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import SEO from '../../components/seo'
import bgImage from "../../images/BuildingAerial.jpg"

const OurFirmIndex = ({data}) => {

const pageData = data.allPrismicOurFirm.edges[0].node.data

return (
  <>
    <SEO title="Our Firm" />
    <L2PagesLayout 
      title = {`Our Firm`}
      subnav = {`firm`}
      backgroundImage = {bgImage}
      content = {pageData.page_body.raw}      
    />
  </>
)
}

export const query = graphql`
  query OurFirm {
    allPrismicOurFirm {
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

export default OurFirmIndex