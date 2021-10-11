import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"



// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>404 | Hmmmm... this page does not exsist.</h1>
      <p><Link to="/">Take me back home</Link></p>
    </Layout>

  )
}

export default NotFoundPage
