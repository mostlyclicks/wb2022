import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import styled from "styled-components";
import { device } from "../../components/media-queries";
import { RichText } from "prismic-reactjs";

const Project = ({data}) => {

  const project = data.prismicProject

  //Get single image -- not needed
  //const image = getImage(project.data.body[0].items[0].image.gatsbyImageData)
  
  const projectImages = project.data.body[0].items
  
  return (
    <Layout>
      <StyledProjectGrid>
        <MainDiv>
          <div id="project-title-location" className="box">
            <h1>{project.data.title.text}</h1>
            <h3>{project.data.location}</h3>
          </div>
          <div id="project-description" className="box">
            {RichText.render(project.data.long_description.raw)}
          </div>

        
          <Link to="/projects">Back to projects</Link>
          {/* 
        get first single image - not needed
      <GatsbyImage image={image} alt="alt" />
       */}

          {/* map over all project images */}
          {projectImages.map((img, index) => {
            const { gatsbyImageData } = img.image;
            console.log(gatsbyImageData);
            return (
              <div id={index} className="box">
                <GatsbyImage image={gatsbyImageData} alt="alt" />
              </div>
            );
          })}
        </MainDiv>
      </StyledProjectGrid>
    </Layout>
  );
}

export default Project


export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: {eq: $uid}) {
      data {
        title {
          text
        }
        location
        long_description {
          raw
          text
        }
        body {
          ... on PrismicProjectDataBodyImage {
            id
            items {
              image {
                alt
                gatsbyImageData (
                  width:800
                  placeholder: BLURRED
                  srcSetMaxWidth: 1500
                )
              }
            }
          }
        }
      }
    uid
    }
  }
`



const StyledProjectGrid = styled.section`
  width: 100%;
  div {
    img {
      width: 100%;
    }
  }

  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`;

const MainDiv = styled.div`
  display: inline-grid;
  // grid-gap:20px;
  // padding:20px;
  margin-bottom: 20px;
  h1 {
    font-family: "IBM Plex Serif";
  }
  h3 {
    font-family: "Open Sans";
    font-weight: 400;
  }

  div:nth-child(1) {
    // border-top:3px solid var(--orange);
    display: inline-grid;
    color: var(--orange);
    // background-color: var(--darkGray);
    background-color: black;
    // order:1;
    padding: 1rem;
    width: 100%;
    padding-top: 150px;
    height: 20vh;
    margin-top: -150px;

    // grid-area:1/1/3/6;
  }
  div:nth-child(2) {
    padding: 1rem;
  }

  @media ${device.tablet} {
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: min-content;
    padding: 0px;
    // grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    // grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
    margin-top: -200px;
    div {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    div:nth-child(1) {
      border-top: 3px solid var(--orange);
      // margin:20px;
      color: var(--orange);
      background-color: var(--darkGray);
      order: 1;
      padding: 1rem;
      grid-area: 1 / 4 / 2 / 5;
      height: 55%;
      width: 80%;
      margin-top: 20vh;
    }

    div:nth-child(2) {
      order: 2;
      grid-area: 3 / 1 / 4 / 2;
      padding: 1rem 2rem;
      font-family: "Open Sans";
      font-weight: 400;
    }

    //MAIN IMAGE
    div:nth-child(3) {
      grid-area: 1 / 1 / 3 / 6;
    }

    div:nth-child(4) {
      grid-area: 3 / 2 / 4 / 6;
    }
    div:nth-child(5) {
    }
    div:nth-child(6) {
      img {
        overflow: none;
      }
    }
    div:nth-child(7) {
      // border:1px solid red;
    }
  }
  @media ${device.laptop} {
    div:nth-child(1) {
      grid-area: 1 / 3 / 2 / 6;
    }
  }
`;