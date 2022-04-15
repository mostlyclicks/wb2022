import React from 'react'
import styled from "styled-components"

import VideoBG from "../../images/website-main-page-video-720.mp4"
import { device } from "../media-queries"

const HeroSection = () =>(
  <StyledHeroSection>
    {/*  
    <TitleContainer>
    <h1>Welcome to Wieser Brothers</h1>
    </TitleContainer>
    */}
    <VideoContainer>
      <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source
          src={VideoBG}
          type="video/mp4"
        />
      </video>
   
    </VideoContainer>
  </StyledHeroSection>
)

export default HeroSection

const StyledHeroSection = styled.section`
margin-bottom:-4px;

@media ${device.tablet} {
}
`

const VideoContainer = styled.div`
video {
  position:absolute;
  top:0px;
  left:0;
  width:100%;
  height:500px;
   -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
}
`