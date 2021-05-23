import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Marquee from "components/Marquee";
import Layout from "components/Layout";
import Container from "components/Container";

const ThankYouPage = ({ data }) => {
  let location = useLocation();
  console.log(location.search);
  const {
    strapiThankYou: { title, marqueeImage, message },
  } = data;
  const marqueeData = { title, marqueeImage };

  useEffect(() => {});

  return (
    <Layout pageName="two">
      <Helmet>
        <title>Thank you</title>
      </Helmet>
      <Container>
        <Marquee marquee={marqueeData} />
        <h1>{message}</h1>
        <h2>Here are some local attractions to look up.</h2>
        <ul>
          <li>Easter Egg Motel</li>
          <li>Ghost Town</li>
        </ul>
        <p>Welcome to page 2</p>
      </Container>
    </Layout>
  );
};

export default ThankYouPage;

export const pageQuery = graphql`
  query ThankYouQuery {
    strapiThankYou {
      title
      id
      message
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
