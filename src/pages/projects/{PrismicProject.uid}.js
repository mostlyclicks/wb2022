import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Project = ({data}) => {

  const project = data.prismicProject
  const image = getImage(project.data.body[0].items[0].image.gatsbyImageData)
  
  const projectImages = project.data.body[0].items
  
  return (
    <div>
      <h1>Project Template</h1>

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

    </div>
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
