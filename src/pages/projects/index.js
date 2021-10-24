import React from 'react'
import { Link, graphql } from 'gatsby'

const index = ({data}) => {

  const projectData = data.allPrismicProject.edges

  return (
    <div>
      <h1>Project Index</h1>
      <p>Might do this by category so this is all temp.</p>

      {projectData.map((project) => {

        return (
          <p>
            <Link to={project.node.uid}>{project.node.data.title.text}</Link>
            
            <div>
            {console.log(project.node.data.body[0].items[0].image.gatsbyImageData.images.fallback.srcSet)}
            <p>{project.node.data.body[0].items[0].image.gatsbyImageData.images.fallback.srcSet}</p>
              {/* 
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

    </div>
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
                    gatsbyImageData(width: 200)
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

