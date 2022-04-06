import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Navbar from "../Navbar/Navbar"


const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
      </HeaderWrapper>
    )}
  />
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header


const HeaderWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
`;











{
  /*

const Header = () => {
  return (
    <div 
      style={{backgroundColor: 'darkgreen', color: 'white'}}
      className="md:container md:mx-auto"
    >
    
      <nav className="flex justify-between p-8">
        <StaticImage src="../../images/wieser-brothers-logo-w.png" alt="Wieser Brothers Logo" />
        <ul className="flex flex-row gap-4">
          <li><Link to="/">Home</Link></li>
          <li>Firm</li>
          <li>Services</li>
          <li>Commitment</li>
          <li>Projects</li>
          <li>News & Events</li>
        </ul>
      </nav>
    </div>
  )
}


*/
}


