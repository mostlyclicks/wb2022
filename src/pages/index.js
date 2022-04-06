import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/Home/hero-section'
import styled from "styled-components"
import HeroBG from "../images/hero_8918-bg3.jpg";

const index = () => {
  return (
    <Layout pageTitle="Home">
      <HeroSection />
      <MainSection>
        <h1>Home</h1>
      </MainSection>
    </Layout>
  );
}

export default index


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
