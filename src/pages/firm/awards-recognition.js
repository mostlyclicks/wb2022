import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import SEO from '../../components/seo'
import bgImage from "../../images/49534569656_d267bed785_o.jpg"

const AwardsRecognition = () => (
  <>
    <SEO title="Awards/Recognition" />
    <L2PagesLayout
      title={`Awards/Recognition`}
      backgroundImage={bgImage}
      subnav = {`firm`}
      content = {`List of awards coming soon.`}
    />
  </>  
  )

export default AwardsRecognition