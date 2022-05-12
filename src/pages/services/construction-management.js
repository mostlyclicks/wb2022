import React from "react";
import { graphql } from "gatsby";
// import { RichText } from "prismic-reactjs";
import L2PagesLayout from "../../components/l2-page-template";
import SEO from '../../components/seo'
import bgImage from "../../images/Commitment-FleetFinal-web.jpg";

const ConstructionManagement = ({data}) => {

  const pageData = data.allPrismicConstructionManagement.edges[0].node.data

  return (
    <>
      <SEO
        title={`Services - ${pageData.page_title.text}`}
        description="Learn how Wieser Brothers manage your construction projects. Contact us at 507.895.8903 for more information. "
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

export default ConstructionManagement


export const query = graphql`
query {
  allPrismicConstructionManagement {
    edges {
      node {
        data {
          meta_description
          meta_title
          page_body {
            raw
          }
          page_title {
            text
          }
        }
      }
    }
  }
}


`