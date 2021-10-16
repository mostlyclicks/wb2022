import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <div style={{backgroundColor: 'darkgreen', color: 'white'}}>
      Header content / logo / topnav / nav
      <nav>
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


