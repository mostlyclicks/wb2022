import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import SEO from '../../components/seo'
import bgImage from "../../images/Framing-Construction.jpg"


const Safety = ({data}) => {
  
  const pageData = data.allPrismicSafety.edges[0].node.data
  
  return (
    <>
      <SEO
        title="Safey"
        description="Learn about safety iniatives at Wieser Brothers. Contact us at 507.895.8903 for more information."
      />
      <L2PagesLayout
        title={`Safety`}
        subnav={`firm`}
        backgroundImage={bgImage}
        content={pageData.page_body.raw}
      />
    </>
  );
}

export const query = graphql`
  query SafetyQuery {
    allPrismicSafety {
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

export default Safety

