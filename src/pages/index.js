import React from 'react'
import styled from "styled-components";
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import HeroSection from '../components/Home/hero-section'
import HomeGrid from "../components/Home/grid-container";
import HeroBG from "../images/hero_8918-bg3.jpg";

const Index = () => {
  return (
    <Layout>
      <SEO title="General Contractor, Design/Build"
        description="Learn about Wieser Brothers, General Contracter, Inc. located in La Crescent MN serving the midwest and western regions."
      />
      <HeroSection />
      <MainSection>
        <HomeGrid />
      </MainSection>
    </Layout>
  );
}

export default Index


const MainSection = styled.main`
  width: 100%;
  // background-image:url(${HeroBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  margin-top: 380px;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00573c+0,003813+100 */
  background: #00573c; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #00573c 0%,
    #003813 100%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #00573c 0%,
    #003813 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    #00573c 0%,
    #003813 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00573c', endColorstr='#003813',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  height: 100%;
`
