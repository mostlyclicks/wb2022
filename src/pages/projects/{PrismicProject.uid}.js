import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
            <Link to="/projects">Back to projects</Link>
          </div>

          {/* 
        get first single image - not needed
      <GatsbyImage image={image} alt="alt" />
       */}

          {/* map over all project images */}
          {projectImages.map((img, index) => {
            const { gatsbyImageData } = img.image;
            return (
              <div id={index}>
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
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    uid
    }
  }
`;



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

  div:nth-child(1) {
    //TITLE BOX
    padding: 20px;
    background-color: black;
    color: var(--orange);
    h1 {
      font-family: "IBM Plex Serif";
    }
    h3 {
      font-family: "Open Sans";
      font-weight: 400;
    }
  }

  div:nth-child(2) {
    //TEXT BOX
    padding: 20px;
    font-family: "Open Sans";
    line-height:1.55rem:
  }

  div:nth-child(3) {
    //MAIN IMAGE
  }

  @media ${device.tablet} {
    display:grid;
    gap:1.5rem;
    grid-template-columns:2fr 1fr;
    grid-template-rows:2fr 2fr;
    padding:0px;
    div:nth-child(1){
      flex:1;
      
    }
    div:nth-child(2) {
      flex:1;
    }

    div:nth-child(3) {
      img {
        object-fit:cover;
      }
      
      
    }


  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }

  
`;

