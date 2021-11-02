import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import TopNav from './top-nav'

const Header = () => {
  return (
    <div style={{backgroundColor: 'darkgreen', color: 'white'}}>
    <TopNav />
      <nav className="flex justify-between">
        <StaticImage src="../../images/wieser-brothers-logo-w.png" alt="Wieser Brothers Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Firm</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header


