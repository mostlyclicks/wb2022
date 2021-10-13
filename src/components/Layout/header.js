import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
      Header content / logo / topnav / nav
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Firm</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
