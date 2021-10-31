import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Project = ({data}) => {

  const project = data.prismicProject
  const image = getImage(project.data.body[0].items[0].image.gatsbyImageData.images.fallback.src)
  const alt = project.data.body[0].items[0].image.alt
  const projectImages = project.data.body[0].items[0]
  console.log(`project images ${projectImages.length}`)
  console.log(typeof project.data.body[0].items[0].image.gatsbyImageData.images.fallback)
  
  const { images } = project.data.body[0].items[0].image.gatsbyImageData
  console.log(project.data.body[0].items[0].image.gatsbyImageData)
  console.log(images)
  const { srcSet } = images
  console.log(srcSet)
  


  return (
    <div>
      <h1>Project Template</h1>

      <p>{project.data.title.text}</p>
      <GatsbyImage image={project.data.body[0].items[0].image.gatsbyImageData} alt="alt" />
      {/* 
      <p>{project.data.body[0].items[0].image.gatsbyImageData.images.fallback.src}</p>
      <GatsbyImage image={project.data.body[0].items[0].image.gatsbyImageData.images.fallback.src} alt={alt} />
    
      <p>{alt}</p>
      */}


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
