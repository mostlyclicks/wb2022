import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getSrcSet, getSrc } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'

const index = ({data}) => {

  const projectData = data.allPrismicProject.edges

  return (
    <Layout>
      <h1>Project Index</h1>
      <p>Might do this by category so this is all temp.</p>

      {projectData.map((project) => {

        //size coming from query
        const image = project.node.data.body[0].items[0].image.gatsbyImageData
        // const image = project.node.data.body[0].items[0].image.gatsbyImageData.images.fallback.src
        const images = project.node.data.body[0].items[0].image.gatsbyImageData.images.fallback.srcSet

        return (
          <p>
            <Link to={project.node.uid}>{project.node.data.title.text}</Link>
            
            <div>
            <GatsbyImage image={image} alt="test" />
            
            


            {/* 

            <img src={image} srcSet={images} alt={project.node.data.title.text} />


            <img src={project.node.data.body[0].items[0].image.gatsbyImageData.images.fallback.src} srcSet={project.node.data.body[0].items[0].image.gatsbyImageData.images.fallback.srcSet} />
              
              {project.node.data.body[0].items[0].map(({images}) => {
                const firstImage = images[0]
                
                return (
                  <div>{firstImage}</div>
                )

              }
              )}
              */}
            </div>
          </p>
          
        )
      })}

    </Layout>
  )
}

export default index

//create index for each category
//Or use a filter in graphql


export const ProjectQuery = graphql`
  query {
    allPrismicProject {
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
                    gatsbyImageData(
                      width: 300
                      placeholder: BLURRED
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

