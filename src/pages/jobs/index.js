import React from 'react'
import { graphql, Link } from 'gatsby'


const index = ({data}) => {
  
  const JobsData = data.allPrismicEmploymentOpportunity.edges
  
  return (
    <div>
      <h1>Employment Opportunities Index</h1>
      {JobsData.map((jobData) => {

        const job = jobData.node

        return (
          <h2><Link to={job.uid}>{job.data.title.text}</Link></h2>
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
          id
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