import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import Quote from "components/Quote";
import Feature from "components/Feature";

const IndexPage = ({ data }) => {
  const {
    strapiHomePage: { title, content, marqueeImage, featured },
  } = data;

  const image = getImage(marqueeImage);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="home">
      <SEO title="Home" keywords={[`terlingua`, `chili`, `cook`, "off"]} />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <Feature items={featured.featuresList} />
        <Quote quote={content}></Quote>
        <GatsbyImage
          image={image}
          alt="Hillside Journey!"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    strapiHomePage {
      id
      title
      content: quoteContent {
        author
        text
      }
      featured {
        id
        featuresList {
          id
          slug
          title
          image {
            childImageSharp {
              gatsbyImageData
              fluid(quality: 90, maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          description
          calloutText
        }
      }
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
