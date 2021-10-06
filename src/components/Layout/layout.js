import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>      
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
