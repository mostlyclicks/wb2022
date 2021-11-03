import React from 'react'

const TopNav = () => {
  return (
    <div className="p-3 mb-5" style={{backgroundColor: '#3d3d3d'}}>
      <ul className="flex justify-end flex-wrap gap-6 ">
        <li className="hidden md:block">COVID-19 UPDATE</li>
        <li className="hidden md:block">Careers</li>
        <li>Submit Bids</li>
        <li>Info</li>
        <li className="hidden md:block">Contact Us</li>
        <li>507.895.8903</li>
      </ul>
      
    </div>
  )
}

export default TopNav
