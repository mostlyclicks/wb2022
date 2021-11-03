import React from 'react'
import { Link } from 'gatsby'

const TopNav = () => {
  return (
    <div className="px-3 py-1.5 mb-5" style={{backgroundColor: '#3d3d3d'}}>
      <ul className="flex justify-center md:justify-end flex-wrap gap-6 ">
        <li className="hidden md:block"><Link to="/">COVID-19 UPDATE</Link></li>
        <li className="hidden md:block"><Link to ="/jobs">Careers</Link></li>
        <li><a href="mailto:bids@wieserbrothers.com">Submit Bids</a></li>
        <li><a href="mailto:info@wieserbrothers.com">Info</a></li>
        <li className="hidden md:block"><Link to="/contact-us">Contact Us</Link></li>
        <li><a href="tel:+1-507-895-8903">507.895.8903</a></li>
      </ul>
    </div>
  )
}

export default TopNav
