import React from "react";
import styled from "styled-components";
import bgImg from "../../images/Action-Field-Picture.jpg";
import { device } from "../media-queries";

const Mission = () => {
  return (
    <MissionVisionSection>
      <MissionWrapper>
        <TextBoxWrapper>
          <TextBox>
            <h2>Mission</h2>
            <p>
              Deliver an exceptional construction experience built on integrity,
              partnership, and excellence, while caring for our employees,
              communities, and environment.
            </p>
          </TextBox>
          <TextBox>
            <h2>Vision</h2>
            <p>
              Build our team and company to be the industry leader in
              construction, while maintaining our family-owned core values.
            </p>
          </TextBox>
        </TextBoxWrapper>
      </MissionWrapper>
    </MissionVisionSection>
  );
};

export default Mission;

const MissionVisionSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-top: auto;
  background-image: url(${bgImg});
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;

  @media ${device.table} {
    height: 500px;
  }
`;
const MissionWrapper = styled.div`
  display: flex;
  width: 100%;
  // border:1px solid red;
  align-items: center;
  height: inherit;
  @media ${device.tablet} {
    max-width: 768px;
    align-items: center;
  }
  @media ${device.laptop} {
    max-width: 960px;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

const TextBoxWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  max-width: 100%;
  padding: 20px 40px;
  div:nth-last-child(1) {
    margin-top: 1rem;
    border-top: 5px solid #fff;
    padding-top: 1.65rem;
  }
  @media ${device.tablet} {
    max-width: 293px;
  }
  @media ${device.laptop} {
    max-width: 390px;
  }
  @media ${device.laptopL} {
    max-width: 510px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #ffffff;
  width: 100%;

  h2 {
    font-family: "IBM Plex Serif";
    margin: 0;
    font-size: 2rem;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    margin-top: 0rem;
    font-size: 1rem;
    line-height: 1.5em;
  }
`;
