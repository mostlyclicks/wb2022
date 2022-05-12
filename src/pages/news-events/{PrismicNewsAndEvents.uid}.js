import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout";
import SEO from '../../components/seo'
import styled from "styled-components";
import { device } from "../../components/media-queries";
import SideBarAddress from '../../components/Subnavs/address-sidebar';



const NewsEventsPost = ({data}) => {

  const article = data.prismicNewsAndEvents
  const image = getImage(article.data.thumbnail.gatsbyImageData)
  

  return (
    <Layout>
      <SEO
        title={article.data.title.text}
        description={`Keep up on the latest news at Wieser Brothers: ${article.data.title.text}`}
      />
      <NewsEventWrapper>
        <NewsMain>
          <h1>{article.data.title.text}</h1>
          <div>{article.data.news_event_long_description.text}</div>
          <GatsbyImage image={image} alt={article.data.title.text} />
        </NewsMain>

        <NewsNav>
          <SideBarAddress />
          <h4>
            <Link to="/news-events">Back to News and Events</Link>
          </h4>
        </NewsNav>
      </NewsEventWrapper>
    </Layout>
  );
}

export default NewsEventsPost


//News Events Post Template
//use props slug to get rest of context

export const query = graphql`
  query NewsEventQuery($uid: String) {
    prismicNewsAndEvents(uid: {eq: $uid}) {
      data {
        title {
          text
        }
        news_event_long_description {
          text
        }
        thumbnail {
          gatsbyImageData(
            width:800
            placeholder: BLURRED
            srcSetMaxWidth: 1500
          )
        }
      }
    }
  }
`

const NewsEventWrapper = styled.section`
  margin: 20px auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  @media ${device.tablet} {
    max-width: 768px;
    grid-template-columns: 2fr 1fr;
  }
  @media ${device.laptop} {
    max-width: 960px;
    grid-template-columns: 3fr 1fr;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

const NewsMain = styled.div`
  h1 {
    font-family: "IBM Plex Serif";
    font-size: 32px;
  }
  padding: 20px 0 0 60px;
  img {
    width: 100%;
    margin:2rem 0;
  
  }
  
  @media ${device.tablet} {
    padding: 0;
    max-width: 768px;
  }
`;

const NewsNav = styled.aside`
  h4 {text-align:center;}
`;