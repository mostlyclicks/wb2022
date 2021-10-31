import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout/Layout'

const Index = ({data}) => {

  const NewsData = data.allPrismicNewsAndEvents.edges
  
  return (
    <Layout>
      <h1>News and Events Index</h1>
      {NewsData.map((articlePost) => {

        const article = articlePost.node
        const image = getImage(article.data.thumbnail.gatsbyImageData)
        
        return (
          <div key={article.id}>
          <h2><Link to={article.url}>{article.data.title.text}</Link></h2>
          <p>{article.url}</p>
          <p>UID {article.uid}</p>
          <Link to={article.url}><GatsbyImage image={image} alt={article.data.title.text} /></Link>
          
          </div>
        )
      })}
    </Layout>
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
          url
          data {
            title {
              text
            }
            thumbnail {
              gatsbyImageData(
                width:280
                height:280
                placeholder: BLURRED
                srcSetMaxWidth: 500
              )
            }
          }
        }
      }
    }
  }
`
