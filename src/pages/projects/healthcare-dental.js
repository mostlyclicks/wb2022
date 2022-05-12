import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/seo'
import { device } from "../../components/media-queries";
import bgImg from "../../images/DJI_0027.jpg";
import bgImg2 from "../../images/trust-partnership-excellence.png";
import styled from "styled-components";
import MainSubnav from "../../components/Subnavs/main-subnav"

const index = ({data}) => {

  const projectData = data.allPrismicProject.edges
  // const projectCount = data.allPrismicProject.totalCount

  return (
    <Layout>
      <SEO
        title="Projects: Healthcare/Dental"
        description="See Wieser Brothers Healthcare/Dental projects. Contact us at 507.895.8903 for more information."
      />
      <ProjectWrapper>
        <L2MainImage>
          <L2Title>
            <h1>Healthcare/Dental</h1>
          </L2Title>
        </L2MainImage>
      </ProjectWrapper>

      <MainContent>
        <ProjectList>
          {projectData.map((project) => {
            const image =
              project.node.data.body[0].items[0].image.gatsbyImageData;
            // const images =
            //   project.node.data.body[0].items[0].image.gatsbyImageData.images
            //     .fallback.srcSet;

            return (
              <ProjectItem>
                <h3>
                  <Link to={`/projects/${project.node.uid}`}>
                    {project.node.data.title.text}
                  </Link>
                </h3>
                <div className="thumbnail">
                  <GatsbyImage
                    image={image}
                    alt={project.node.data.title.text}
                    style={{ width: `100%` }}
                  />
                </div>
              </ProjectItem>
            );
          })}
        </ProjectList>
        <L2Navigation>
          <MainSubnav subnav="projectcat" />
        </L2Navigation>
      </MainContent>
    </Layout>
  );
}

export default index

//create index for each category
//Or use a filter in graphql


export const ProjectQuery = graphql`
  query {
    allPrismicProject(filter: { tags: { eq: "healthcare dental" } }) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            body {
              ... on PrismicProjectDataBodyImage {
                id
                items {
                  image {
                    gatsbyImageData(width: 300, placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;



//Styles


const ProjectWrapper = styled.section`
  background-image: url(${bgImg2});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 500px;
  background-size: 40%;
`;

const L2MainImage = styled.div`
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

const MainContent = styled.main`
    display:grid;
    grid-template-columns:1fr;
    margin-top:80px;
    padding:20px;
    grid-gap:20px;
  }

  @media ${device.tablet} {
    margin:80px auto;
    grid-template-columns: 2fr 1fr;
    padding:0px;
    max-width:768px;
  }
  @media ${device.laptop} {
    grid-template-columns:3fr 1fr ;
    max-width:960px;
  }
  @media ${device.laptopL} {
    max-width:1200px;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr;
  }
`;


const L2Navigation = styled.aside`
  display: flex;
  flex-direction: column;

  padding-top: 0px;
  ul {
    background-color: rgba(0, 0, 0, 0.08);
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    li:nth-last-child(1) {
      border-bottom: none;
    }

    li {
      border-bottom: 1px solid #ededed;
      text-decoration: none;
    }
    li a {
      font-family: "Open Sans";
      color: var(--wbGreenDark);
      font-weight: 400;
      display: block;
      padding: 1rem;
      text-decoration: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        transition: 0.5s;
        color: #ffffff;
      }
    }
  }
`;


const ProjectItem = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-row: 1fr;
  h3 {
    margin-top: 0px;
    font-family: 'IBM Plex Serif';
    a {
      text-decoration: none;
      display: block;
      color: var(--orange);
      background-color: var(--darkGray);
      padding: 1rem;
            &: hover {
        color:#ffffff;
        transition: .8s;
        background-color: var(--orange);
      }
    }
    grid-area: 1 / 1 / 1 / 2;
    z-index: 1;
  }
      .thumbnail {
    grid-area: 1 / 1 / 2 / 2;
    img {
      height: 300px;
      object-fit: cover;
    }

`;