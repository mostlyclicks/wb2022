import React from 'react'
import { graphql, Link } from 'gatsby'


const Index = ({data}) => {

  const NewsData = data.allPrismicNewsAndEvents.edges
  console.log(NewsData)

  return (
    <div>
      <h1>News and Events Index</h1>
      {/*  */}
      {NewsData.map((article) => {

        return (
          <h2><Link to={article.node.uid}>{article.node.data.title.text}</Link></h2>
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
