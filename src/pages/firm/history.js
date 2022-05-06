import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import SEO from '../../components/seo'
import bgImage from "../../images/Group-Photo-2.jpg"

const History = ({data}) => {
  
  const pageData = data.allPrismicHistory.edges[0].node.data

  return (
  <>
    <SEO title="Our History" />
    <L2PagesLayout 
      title = {`Our History`}

      backgroundImage = {bgImage}
      subnav={`firm`}
      content = {pageData.page_body.raw}
 
      />
    </>
  
)
}

export const HistoryQuery = graphql`
  query HistoryQuery {
    allPrismicHistory {
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

export default History


