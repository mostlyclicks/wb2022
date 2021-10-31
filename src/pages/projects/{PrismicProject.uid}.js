import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'

const Project = ({data}) => {

  const project = data.prismicProject

  //Get single image -- not needed
  //const image = getImage(project.data.body[0].items[0].image.gatsbyImageData)
  
  const projectImages = project.data.body[0].items
  
  return (
    <Layout>
      <h1>Project Template</h1>
      <Link to="/projects">Back to projects</Link>

      <p>{project.data.title.text}</p>
      {/* 
        get first single image - not needed
      <GatsbyImage image={image} alt="alt" />
       */}

      {/* map over all project images */}
      {projectImages.map((img) => {
          const { gatsbyImageData } = img.image
          console.log(gatsbyImageData)
        return (
          <p>
          <GatsbyImage image={gatsbyImageData} alt="alt" /></p>
        )
      })}

    </Layout>
  )
}

export default Project


export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: {eq: $uid}) {
      data {
        title {
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
