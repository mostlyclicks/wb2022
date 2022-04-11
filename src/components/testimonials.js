import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { device } from "./media-queries"

const RandomTestimonial = () => {

  return (
    <StaticQuery
      query={graphql`
        query QueryTestimonials {
          allPrismicTestimonial {
            totalCount
            nodes {
              data {
                title {
                  text
                }
                testimonial_text {
                  raw
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const testimonialCount = data.allPrismicTestimonial.totalCount;
        const getRandomInt = (max) => {
          return Math.floor(Math.random() * Math.floor(max));
        };
        const singleTestimonial = data.allPrismicTestimonial.nodes[getRandomInt(testimonialCount)]

        return (
          <StyledBlockquote>
            <p>
              {RichText.render(singleTestimonial.data.testimonial_text.raw)}
            </p>
            <p>
              <strong>{singleTestimonial.data.title.text}</strong>
            </p>
          </StyledBlockquote>
        );
      }}
    />
  );
}

export default RandomTestimonial

const StyledBlockquote = styled.blockquote`
  &::before {
    content: "“";
    font-size: 20rem;
    display: block;
    position: relative;
    left: -125px;
    top: 15px;
    color: #efefef;
    font-family: "IBM Plex Serif";
  }

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#efefef+0,cdcdcd+100&1+0,0+100 */
  background: -moz-linear-gradient(
    -45deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(205, 205, 205, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(205, 205, 205, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(205, 205, 205, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#efefef', endColorstr='#00cdcdcd',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  color: white;
  font-size: 1rem;
  line-height: 1.75rem;
  border-radius:20px;
  padding: 2rem;
  color: rgba(0, 0, 0, 0.58);
  position: relative;
  margin: 80px 0px 0 80px;
  height: auto;
  p {
    position: relative;
    left: -4.5rem;
    top: -2.5rem;
    width: 120%;
    font-family: "Open Sans";
    font-weight: 400;
  }

  @media ${device.tablet} {
    p {
      width:150%;
    }
  }

`