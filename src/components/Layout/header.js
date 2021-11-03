import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


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

export default Header


