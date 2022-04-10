import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/BuildingAerial.jpg"

const OurFirmIndex = ({data}) => {

const OurFirmData = data.allPrismicOurFirm.edges[0]

return (
  <>
    <L2PagesLayout 
      title = {`Our Firm`}
      subnav = {`firm`}
      backgroundImage = {bgImage}
      content = {OurFirmData.node.page_body}      
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