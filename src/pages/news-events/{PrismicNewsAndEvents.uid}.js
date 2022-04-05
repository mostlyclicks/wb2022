import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



const NewsEventsPost = ({data}) => {

  const article = data.prismicNewsAndEvents
  const image = getImage(article.data.thumbnail.gatsbyImageData)
  

  return (
    <div>
      <h1>News/Events Template</h1>
      
      <div>
        <h2><Link to="/news-events">Back to News and Events</Link></h2>
        {article.data.title.text}
        <GatsbyImage image={image} alt={article.data.title.text} />
       </div>
    </div>
  )
}

export default NewsEventsPost


//News Events Post Template
//use props slug to get rest of context

export const query = graphql`
  query NewsEventQuery($uid: String) {
    prismicNewsAndEvents(uid: {eq: $uid}) {
      data {
        title {
          text
        }
        thumbnail {
          gatsbyImageData(
            width:800
            placeholder: BLURRED
            srcSetMaxWidth: 1500
          )
        }
      }
    }
  }
`

