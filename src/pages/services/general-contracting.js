import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import L2PagesLayout from "../../components/l2-page-template";
import SEO from '../../components/seo'
import bgImage from "../../images/wb-planning2.jpg";

const GeneralContracting = ({data}) => {

  const pageData = data.allPrismicGeneralContracting.edges[0].node.data

  return (
    <>
      <SEO
        title={`Services - ${pageData.page_title.text}`}
        description="Wieser Brothers can manage all aspects of your construction project. Contact us at 507.895.8903 for more information."
      />
      <L2PagesLayout
        title={pageData.page_title.text}
        subnav={`services`}
        backgroundImage={bgImage}
        content={pageData.page_body.raw}
      />
    </>
  );
}

export default GeneralContracting

export const query = graphql`
  query {
    allPrismicGeneralContracting {
      edges {
        node {
          data {
            page_title {
              text
            }
            page_body {
              raw
            }
          }
        }
      }
    }
  }
`;


