import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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


