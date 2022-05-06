import React from 'react'
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../components/Layout/Layout"
import SEO from '../../../components/seo'
import { device } from "../../../components/media-queries"
import MainSubnav from "../../../components/Subnavs/main-subnav"
import bgImage from "../../../images/ConcreteCrew-HolmenCheese2-compressed.jpg"
import bgImg from "../../../images/trust-partnership-excellence.png"
import workApp from "../../../images/WB-Job-Application-Fillable-Form-12-21-19.pdf"


const Careers = ( {data} ) => {

  const empOpportunites = data.allPrismicEmploymentOpportunity.nodes;
  
  const EmpOps = () => {
    return (
      empOpportunites.map(job => <p><Link to={`/firm/careers/${job.uid}`}>{job.data.title.text}</Link></p>)
    )
  }

 return (
   <Layout>
     <SEO title="Careers" />
     <ContentWrapper>
       <L2MainImage
         style={{
           backgroundImage: "url(" + bgImage + ")",
         }}
       >
         <L2Title>
           <h1>Careers</h1>
         </L2Title>
       </L2MainImage>

       <Content>
         <MainContent>
           <h3>Current Openings</h3>
           <EmpOps />
           <p>
             <a
               href={workApp}
               title="Wieser Brothers Job Application   Fillable Form 12 21 19"
               class="btn btn-primary"
             >
               Click here to Apply
             </a>
           </p>
           <p>
             <iframe
               width="640"
               height="480"
               src="https://www.youtube.com/embed/o74bnHhBs04"
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
               style={{margin:"0 auto"}}
             ></iframe>
           </p>
           <p>
             Wieser Brothers General Contractor, Inc. is a well-recognized and
             highly-respected construction company in La Crescent, MN (just
             minutes away from La Crosse, WI). We credit our dedicated team of
             employees for 25 plus years of success and are committed to strong
             core values that are reinforced in everything that we do. If you
             are interested in joining an organization that rewards individual
             initiative and promotes career development through life-long
             learning, please contact Wieser Brothers.
           </p>
           <p>
             Wieser Brothers General Contractor, Inc. offers competitive wages
             based on education and work experience. We also offer a highly
             competitive benefits program that includes a 401(k) plan, profit
             sharing, health and dental insurance, short term and long term
             disability insurance, paid time off (PTO) and holiday pay.
           </p>
           <p>
             Wieser Brothers General Contractor, Inc. is an equal opportunity
             employer. All qualified applicants will receive consideration for
             employment without regard to status as a protected veteran or a
             qualified individual with a disability, or other protected status,
             such as race, religion, color, national origin, sex, age. 
           </p>
           <p>EOE and Drug-Free Workplace </p>
           <p>
             <a
               href="mailto:careers@wieserbrothers.com"
               title="careers@wieserbrothers.com"
             >
               careers@wieserbrothers.com
             </a>
             <a
               href="/our-firm/employment-opportunities/safety-director"
               title="Safety Director"
             ></a>
           </p>
         </MainContent>
         <L2Navigation>
           <MainSubnav subnav="firm" />
         </L2Navigation>
       </Content>
     </ContentWrapper>
   </Layout>
 );

}


export default Careers

export const query = graphql`
  query CareersQuery {
    allPrismicEmploymentOpportunity {
      nodes {
        data {
          job_description {
            raw
          }
          title {
            text
          }
        }
        uid
      }
    }
  }
`;
const ContentWrapper = styled.div`
  
  margin-top:-200px;
  
`

const Content = styled.section`
display:grid;
grid-template-columns:1fr;
grid-gap:20px;

 background-image:url(${bgImg});
 background-repeat:no-repeat;
 background-position-x:100%;
 background-position-y:0px;
 background-size:35%;


padding:1.5rem;
 
  @media ${device.tablet} {
    margin:0 auto;
    
    max-width:768px;
    grid-template-columns:2fr 1fr;
  }

  @media ${device.laptop} {
    
    max-width:960px;
    grid-template-columns:3fr 1fr;
  }

  @media ${device.laptopL} {
    // border:1px solid black;
    max-width:1200px;
  }

`

const MainContent = styled.main`
  font-family:'Open Sans';
  font-weight:400 !important;
  margin-top:2.5rem;
`

const L2Title = styled.div`
width:100%;
  h1 {
    display:inline-block;
    margin-bottom:-30px;
    margin-left:auto;
    margin-right:auto;
    color:#ffffff;
    font-size:28px;
    font-family:'IBM Plex Serif';
    background-color:rgba(0,0,0,.7);
    padding:2rem 3rem;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    border-top:6px solid var(--orange);
  }
@media ${device.tablet} {
  max-width:768px;
  margin:0 auto;
}
@media ${device.laptop} {
  max-width:960px;
  margin:0 auto;
}
@media ${device.laptopL} {
  max-width:1200px;
  margin:0 auto;
}

`

const L2MainImage = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
  height:300px;
  width:100%;
  background-size:cover;
  background-position:center;
  background-position-y:50px;
  background-repeat:no-repeat;
  

  @media ${device.tablet} {
    height:350px;
    background-position-y:center;
  }
  @media ${device.laptop} {
    height:350px;
    background-position-y:-150px;
    background-size:100%;
  }
  @media ${device.laptopL} {
    margin:0 auto;
    max-width:2100px;  
    height:400px;  
     background-position-y:-300px;
     background-size:100%;
  }
  @media ${device.desktop} {
    margin:0 auto;
    height:500px;
    background-position-y:-1000px;
    
    max-width:2500px;
  }
`

const L2Navigation = styled.aside`
  display: flex;
  flex-direction: column;

  padding-top: 52px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    li:nth-last-child(1) {
      border-bottom: none;
    }

    li {
      border-bottom: 1px solid #ededed;
      text-decoration: none;
    }
    li a {
      font-family:'Open Sans';
      color:var(--wbGreenDark);
      font-weight:400;
      display: block;
      padding: 1rem;
      text-decoration: none;
    }
  }
`



