import React from 'react'
import { Link } from 'gatsby'

const MainSubnav = (props) => {

  if (props.subnav === 'firm') {
    return <FirmSubnav />
  } else if (props.subnav === 'services') {
    return <ServicesSubnav />
  } else if (props.subnav === 'commitment') {
    return <CommitmentSubnav />
  } else if (props.subnav === 'projectcat') {
    return <ProjectSubnav />
  }
}

export default MainSubnav


const FirmSubnav = () => (
  <>
    <ul>
      <li>
        <Link to="/firm">Our Firm</Link>
      </li>
      <li>
        <Link to="/firm/history">History</Link>
      </li>
      <li>
        <Link to="/firm/safety">Safety</Link>
      </li>
      <li>
        <Link to="/firm/sustainability">Sustainability</Link>
      </li>
      <li>
        <Link to="/firm/professional-affiliations">Professional Affiliations</Link>
      </li>
      <li>
        <Link to="/firm/careers">Careers</Link>
      </li>
    </ul>
  </>
)

const ServicesSubnav = () => (
  <>
    <ul>
      <li>
        <Link to="/services">Our Services</Link>
      </li>
      <li>
        <Link to="/services/general-contracting">General Contracting</Link>
      </li>
      <li>
        <Link to="/services/design-build">Design/Build</Link>
      </li>
      <li>
        <Link to="/services/construction-management">Construction Management</Link>
      </li>
    </ul>
  </>
)

const CommitmentSubnav = () => (
  <>
    <ul></ul>
  </>
)

const ProjectSubnav = () => (
  <>
    <ul>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
      <li>
        <Link to="/projects/automotive">Automotive</Link>
      </li>
      <li>
        <Link to="/projects/cold-storage-warehousing">Cold Storage/Warehousing</Link>
      </li>
      <li>
        <Link to="/projects/community-worship">Community/Worship</Link>
      </li>
      <li>
        <Link to="/projects/educational">Educational</Link>
      </li>
      
      <li>
        <Link to="/projects/food-processing">Food Processing</Link>
      </li>
      <li>
        <Link to="/projects/financial">Financial</Link>
      </li>
      <li>
        <Link to="/projects/healthcare-dental">Healthcare/Dental</Link>
      </li>
      <li>
        <Link to="/projects/lodging-multi-dwelling">Lodging/Multi-Dwelling</Link>
      </li>
      <li>
        <Link to="/projects/manufacturing">Manufacturing</Link>
      </li>
      <li>
        <Link to="/projects/office">Office</Link>
      </li>
      <li>
        <Link to="/projects/restaurants">Restaurants</Link>
      </li>
      <li>
        <Link to="/projects/retail">Retail</Link>
      </li>

    </ul>
  </>

)

