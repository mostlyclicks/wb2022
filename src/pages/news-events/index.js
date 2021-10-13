import React from 'react'
import { graphql, Link } from 'gatsby'

const Index = ({data}) => {

  const NewsData = data.allPrismicNewsAndEvents.edges
  
  return (
    <div>
      <h1>News and Events Index</h1>
      {NewsData.map((articlePost) => {

        const article = articlePost.node

        return (
          <h2><Link to={article.uid}>{article.data.title.text}</Link></h2>
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
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`
