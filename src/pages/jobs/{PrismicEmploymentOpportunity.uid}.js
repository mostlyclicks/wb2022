import React from 'react'
import { graphql } from 'gatsby'

//Template for Employment opp/job
//pass id or slug in props
//use this to query for single employment opportunity

const EmploymentOpportunity = ({data}) => {

  const job = data.prismicEmploymentOpportunity
  console.log(job)

  return (
    <div>
      {job.data.title.text}
    </div>
  )
}

export default EmploymentOpportunity


export const query = graphql`
  query JobQuery($uid: String) {
    prismicEmploymentOpportunity(uid: {eq: $uid}) {
      data {
        title {
          text
        }
      }
    }
  }
`
