import React from 'react'
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import { device } from "../components/media-queries";
import styled from "styled-components";

const PrivacyPolicy = ({data}) => {


  const pageData = data.allPrismicPrivacyPolicy.edges[0].node.data

  return (
    <Layout>
      <SEO title="Privacy Policy" description="Read our policy on privacy. Wieser Brothers, General Contractor Inc." />
      <Content>
        <h1>{pageData.page_title.text}</h1>
        <main>{RichText.render(pageData.page_body.raw)}</main>
      </Content>
    </Layout>
  );
}

export default PrivacyPolicy

export const query = graphql`
query {
  allPrismicPrivacyPolicy {
    edges {
      node {
        data {
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

const Content = styled.section`
  padding: 20px;
  @media ${device.tablet} {
    margin: 60px auto;
    // border:1px solid green;
    max-width: 768px;
    grid-template-columns: 2fr 1fr;
  }

  @media ${device.laptop} {
    max-width: 960px;
    grid-template-columns: 3fr 1fr;
  }

  @media ${device.laptopL} {
    // border:1px solid black;
    max-width: 1200px;
  }
`;

