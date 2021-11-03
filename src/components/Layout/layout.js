import React from 'react'
import Header from './header'
import Footer from './footer'
import TopNav from './top-nav'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>  
      <TopNav />    
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
