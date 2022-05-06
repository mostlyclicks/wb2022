import React from 'react'
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import L2PagesLayout from "../../components/l2-page-template";
import SEO from "../../components/seo"
import bgImage from "../../images/Action-Field-Picture.jpg";

const ServicesIndex = ({data}) => {

  const pageData = data.allPrismicServices.edges[0].node.data

  return (
    <>
      <SEO title="General Contractor Services" />
      <L2PagesLayout
        title = {`Our Services`}
        subnav = {`services`}
        backgroundImage={bgImage}
        content = {pageData.page_body.raw}
      />
    </>
  )
}

export default ServicesIndex

export const query = graphql`
  query {
    allPrismicServices {
      edges {
        node {
          data {
            meta_title
            meta_description
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
