import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { device } from "../../components/media-queries";
import Layout from '../../components/Layout/Layout'
import bgImg from "../../images/news-events-header.jpg";
import bgImg2 from "../../images/trust-partnership-excellence.png";
import styled from "styled-components"

const Index = ({data}) => {

  const NewsData = data.allPrismicNewsAndEvents.edges
  
  return (
    <Layout>
      <NewsWrapper>
        <L2MainImage>
          <L2Title>
            <h1>News & Events</h1>
          </L2Title>
        </L2MainImage>
      </NewsWrapper>

      <NewsList>
        {NewsData.map((articlePost) => {
          const article = articlePost.node;
          const image = getImage(article.data.thumbnail.gatsbyImageData);

          return (
            <Item>
              <Link to={article.url}>
                <ItemImg>
                  <GatsbyImage image={image} alt={article.data.title.text} />
                </ItemImg>
                <ItemArticle key={article.id}>
                  <h3>
                    <Link to={article.url}>{article.data.title.text}</Link>
                  </h3>
                  <p>UID {article.uid}</p>
                </ItemArticle>
              </Link>
            </Item>
          );
        })}
      </NewsList>
    </Layout>
  );
}
export default Index

export const NewsEventsQuery = graphql`
  query {
    allPrismicNewsAndEvents {
      edges {
        node {
          id
          uid
          url
          data {
            title {
              text
            }
            thumbnail {
              gatsbyImageData(
                width:280
                height:280
                placeholder: BLURRED
                srcSetMaxWidth: 500
              )
            }
          }
        }
      }
    }
  }
`



const PaginationNav = styled.div`
  
  display:flex;
  justify-content:space-between;
  margin-right:20px;
  padding:3rem;
  
  button {
    font-family:'Open Sans';
    border-radius:10px;
    border:none;
    padding:1rem;
    font-size:16px;
    &:hover {background-color:;#fff;}

    
  }
`;

const NewsWrapper = styled.div`
  background-image: url(${bgImg2});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 500px;
  background-size: 40%;
`;
const L2MainImage = styled.section`
  background-image: url(${bgImg});
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 500px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -200px;
`;

const L2Title = styled.div`
  width: 100%;
  h1 {
    display: inline-block;
    margin-bottom: -30px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    font-size: 28px;
    font-family: "IBM Plex Serif";
    background-color: var(--darkGray);
    padding: 2rem 3rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-top: 6px solid var(--orange);
  }
  @media ${device.tablet} {
    max-width: 768px;
    margin: 0 auto;
  }
  @media ${device.laptop} {
    max-width: 960px;
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const MainContent = styled.section`
  width: 100%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: 2fr 1fr;
    max-width: 768px;
  }
  @media ${device.laptop} {
    grid-template-columns: 3fr 1fr;
    max-width: 960px;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media ${device.tablet} {
    max-width: 768px;
    grid-template-columns: 1fr 1fr;
    margin-right: 20px;
  }
  @media ${device.laptop} {
    max-width: 960px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

const L2Navigation = styled.aside`
  padding-top: 120px;
`;

const Item = styled.div`
  display: flex;
  background-color: #f3f3f3;
  a {
    text-decoration: none;
  }
  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  min-height: 100%;
  max-height:500px;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  @media {device.tablet} {
    //max-height:400px;
    //min-height:60%;
  }
`;

const ItemArticle = styled.article`
  padding: 20px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-family: "IBM Plex Serif";
    flex: 1;
  }
  h5 {
    justify-content: flex-end;
  }
`;

const ItemImg = styled.div`
  padding-bottom: 90%;
  background-size: cover;
  background-position: center center;
  
  @media {device.tablet} {
    padding-bottom:50%;
    
  }
`;