import React from 'react'
import { graphql } from 'gatsby'


const index = ({data}) => {
  
  const JobsData = data.allPrismicEmploymentOpportunity.edges
  
  return (
    <div>
      <h1>Employment Opportunities Index</h1>
      {JobsData.map((job) => {

        return (
          <h2>{job.node.data.title.text}</h2>
        )
      })}
    </div>
  )
}

export default index

//Query all jobs 
//need title and slug

export const JobData = graphql`
  query {
    allPrismicEmploymentOpportunity {
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