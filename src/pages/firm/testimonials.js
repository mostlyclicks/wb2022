import React from 'react'
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import SEO from '../../components/seo'
import Layout from "../../components/Layout/Layout"



const Testimonials = ( {data} ) => {

  const testimonialList = data.allPrismicTestimonial.edges
  // const testimonialCount = data.allPrismicTestimonial.totalCount


  
  return (
    <Layout>
      <SEO title="Testimonials" />
      <h1>Testimonials</h1>
      
      <ul>
        {testimonialList.map(quote => {
          return (
            <li>
              <Link to={`/firm/testimonials/${quote.node.uid}`}>
                {RichText.asText(quote.node.title)} -{" "}
                {RichText.asText(quote.node.person_quoted)}
              </Link>
              {RichText.asText(quote.node.testimonial_text)}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Testimonials

export const query = graphql`
  query TestimonialQueryPage {
    allPrismicTestimonial {
      edges {
        node {
          uid
          data {
            person_quoted {
              text
            }
            testimonial_text {
              text
              raw
            }
            title {
              raw
            }
          }
        }
      }
      totalCount
    }
  }
`;