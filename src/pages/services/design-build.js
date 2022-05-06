import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import L2PagesLayout from "../../components/l2-page-template";
import SEO from '../../components/seo'
import bgImage from "../../images/hero_8918.jpg";

const DesignBuild = ({data}) => {

  const pageData = data.allPrismicDesignBuild.edges[0].node.data

  return (
    <>
      <SEO title={`Services - ${pageData.page_title.text}`} />
      <L2PagesLayout
        title={`Design/Build`}
        subnav={`services`}
        backgroundImage={bgImage}
        content={pageData.page_body.raw}
      />
    </>
  );
}

export default DesignBuild

export const query = graphql`
  query {
    allPrismicDesignBuild {
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
`;