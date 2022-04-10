import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Group-Photo-2.jpg"

const History = ({data}) => {
  
  const HistoryData = data.allPrismicHistory.nodes[0];

  return (
  <>
    <L2PagesLayout 
      title = {`Our History`}

      backgroundImage = {bgImage}
      subnav={`firm`}
      content = {HistoryData.data.page_body}
 
      />
    </>
  
)
}

export const HistoryQuery = graphql`
  query HistoryQuery {
    allPrismicHistory {
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

export default History


