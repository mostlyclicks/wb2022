import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, getSrcSet } from 'gatsby-plugin-image'

const Index = ({data}) => {

  const NewsData = data.allPrismicNewsAndEvents.edges
  
  
  return (
    <div>
      <h1>News and Events Index</h1>
      {NewsData.map((articlePost) => {

        const article = articlePost.node
        const image = getImage(article.data.thumbnail.gatsbyImageData)
        const imageP = getSrcSet(article.data.thumbnail.fluid.srcSetWebp)
        
        

        return (
          <div key={article.id}>
          <h2><Link to={article.uid}>{article.data.title.text}</Link></h2>
          <GatsbyImage image={image} alt={article.data.title.text} />
          <GatsbyImage image={imageP} alt={article.data.title.text} />
          </div>
        )
      })}
    </div>
  )
}
export default Index

export const NewsEventsQuery = graphql`
  query {
    allPrismicNewsAndEvents {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            thumbnail {
              gatsbyImageData(
                width:200
              )
              fluid {
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`
