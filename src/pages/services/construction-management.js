import React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../../components/Layout/layout";

const ConstructionManagement = ({data}) => {

  const pageData = data.allPrismicConstructionManagement.edges[0].node.data

  return (
    <div>
      <h1>{pageData.page_title.text}</h1>
      <main>
        {RichText.render(pageData.page_body.raw)}
      </main>
    </div>
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