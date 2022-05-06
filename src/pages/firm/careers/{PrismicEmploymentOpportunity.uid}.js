import React from "react";
import { graphql } from "gatsby";

import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import L2PagesLayout from "../../../components/l2-page-template"
import SEO from '../../../components/seo'
import { device } from "../../../components/media-queries";
import MainSubnav from "../../../components/Subnavs/main-subnav";
import bgImage from "../../../images/ConcreteCrew-HolmenCheese2-compressed.jpg";
import bgImg from "../../../images/trust-partnership-excellence.png";
import workApp from "../../../images/WB-Job-Application-Fillable-Form-12-21-19.pdf";
import { RichText } from "prismic-reactjs";


//Template for Employment opp/job
//pass id or slug in props
//use this to query for single employment opportunity

const EmploymentOpportunity = ({ data }) => {
  const job = data.prismicEmploymentOpportunity;

  return (
    <>
      <SEO title={`Careers: ${job.data.title.text}`} />
      <L2PagesLayout
        title={`Careers`}
        backgroundImage={bgImage}
        subnav={`firm`}
        content={job.data.job_description.raw}
      />
    </>
  );
};

export default EmploymentOpportunity;

export const query = graphql`
  query JobOppQuery($uid: String) {
    prismicEmploymentOpportunity(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        job_description {
          raw
        }

      }
    }
  }
`;


const ContentWrapper = styled.div`
  margin-top: -200px;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0px;
  background-size: 35%;

  padding: 1.5rem;

  @media ${device.tablet} {
    margin: 0 auto;

    max-width: 768px;
    grid-template-columns: 2fr 1fr;
  }

  @media ${device.laptop} {
    max-width: 960px;
    grid-template-columns: 3fr 1fr;
  }

  @media ${device.laptopL} {
    // border:1px solid black;
    max-width: 1200px;
  }
`;

const MainContent = styled.main`
  font-family: "Open Sans";
  font-weight: 400 !important;
  margin-top: 2.5rem;
`;

const L2Title = styled.div`
  width: 100%;
  h1 {
    display: inline-block;
    margin-bottom: -30px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    font-size: 28px;
    font-family: "IBM Plex Serif";
    background-color: rgba(0, 0, 0, 0.7);
    padding: 2rem 3rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-top: 6px solid var(--orange);
  }
  @media ${device.tablet} {
    max-width: 768px;
    margin: 0 auto;
  }
  @media ${device.laptop} {
    max-width: 960px;
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const L2MainImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-position-y: 50px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    height: 350px;
    background-position-y: center;
  }
  @media ${device.laptop} {
    height: 350px;
    background-position-y: -150px;
    background-size: 100%;
  }
  @media ${device.laptopL} {
    margin: 0 auto;
    max-width: 2100px;
    height: 400px;
    background-position-y: -300px;
    background-size: 100%;
  }
  @media ${device.desktop} {
    margin: 0 auto;
    height: 500px;
    background-position-y: -1000px;

    max-width: 2500px;
  }
`;

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
      font-family: "Open Sans";
      color: var(--wbGreenDark);
      font-weight: 400;
      display: block;
      padding: 1rem;
      text-decoration: none;
    }
  }
`;
