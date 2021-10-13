import React from 'react'
import { graphql } from 'gatsby'

const Project = ({data}) => {

  const project = data.prismicProject

  return (
    <div>
      <h1>Project Template</h1>

      {project.data.title.text}

    </div>
  )
}

export default Project


export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: {eq: $uid}) {
      data {
        title {
          text
        }
      }
    }
  }
`
