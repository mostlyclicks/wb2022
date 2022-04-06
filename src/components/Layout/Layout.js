import React from 'react'
import PropTypes from "prop-types";
import "./layout.css"
import Header from './header'
import Footer from './footer'
import TopNav from './top-nav'
import styled from "styled-components"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>  
      <TopNav />    
      <Header />
      <ContentDiv>
        {children}
      </ContentDiv>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const ContentDiv = styled.div`
  input[type=search] {
    width:100%;
    border:none;
    border-bottom:1px solid #cdcdcd;
    line-height:.5em;
    padding:.6em 20px;
    font-size:2em;
    background-color:transparent;
  }
  
`
