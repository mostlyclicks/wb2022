import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from '../components/seo'
import { device } from "../components/media-queries";
import styled from "styled-components";



// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Page not found" description="Page not found" />
      <Content>
        <h1>404 | Hmmmm... this page does not exsist.</h1>
        <p>
          <Link to="/">Take me back home</Link>
        </p>
      </Content>
    </Layout>
  );
}

export default NotFoundPage

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
