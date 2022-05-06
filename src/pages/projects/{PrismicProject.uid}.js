import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/seo'
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
    <SEO title={`Projects: ${project.data.title.text}`} />
      <StyledProjectGrid>
        <MainDiv>
          <div id="project-title-location" className="box">
            <h1>{project.data.title.text}</h1>
            <h3>{project.data.location}</h3>
          </div>
          <div id="project-description" className="boxx">
            {RichText.render(project.data.long_description.raw)}
            <Link to="/projects">Back to projects</Link>
          </div>
          
          {projectImages.map((img, index) => {
            const { gatsbyImageData } = img.image;
            return (
              <div id={`box-${index}`}>
                <GatsbyImage image={gatsbyImageData} alt="alt" />
              </div>
            );
          } 
        )}
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
  display: grid;

  #project-title-location {
    //TITLE BOX
    padding: 20px;
    margin:20px;
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

  #project-description {
    //TEXT BOX
    padding: 20px;
    font-family: "Open Sans";
    line-height:1.55rem:    
  }

    @media ${device.tablet} {
      max-width:1600px;
      margin:0 auto 80px auto;
      gap:1.5rem;
      padding:20px;
  
      #project-title-location {
        grid-area: 1/1/2/2;
      }

      #project-description {
        grid-area: 1/2/2/4;
      }

      #box-0 {
        grid-area:2/1/3/3;
        postion:relative;
        z-index:100;
      }

      #box-1 {
         grid-area:2/3/4/5;
         padding-top:80px;

      }

      #box-2 {
        grid-area:4/2/5/5;
      }

      #box-3 {
        
        background-color:green;
        grid-area:5/1/6/3;
        img {
           box-shadow:20px 20px 0px rgba(0,0,0,.5);
          
        }
      }

      #box-4 {
        border:2px solid red !important;
        grid-area:5/1/6/3;
        background-color:red;
        img {
          
        }
      }

      #box-5 {
        border:2px solid green !important;
        4/1/5/3
        background-color:yellow;
        img {
           
        }
      }

      #box-6 {
        border:2px solid yellow !important;
        grid-area:5/1/6/4;
        background-color:purple;
        img {
           
        }
      }
    }


  @media ${device.laptop} {
          

  }
  @media ${device.laptopL} {
  }

  
`;

