import React from 'react'
import { graphql } from 'gatsby'

const Index = ({data}) => {

  const NewsData = data.allPrismicNewsAndEvents.edges
  console.log(NewsData)

  return (
    <div>
      <h1>News and Events Index</h1>
      {/*  */}
      {NewsData.map((article) => {

        return (
          <h2>{article.node.data.title.text}</h2>
        )
      })}
     
    </div>
  )
}
export default Index


//get all news and events
//may need to paginate ... arghhhhh
//Get slug/Id and title


export const NewsEventsQuery = graphql`
query {
  allPrismicNewsAndEvents {
    edges {
      node {
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
