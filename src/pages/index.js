import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import Checkout from "components/Checkout";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import Quote from "components/Quote";
import CardGallery from "components/CardGallery";
import Feature from "components/Feature";
import TextDisplay from "components/TextDisplay.js";

const IndexPage = ({ data }) => {
  const {
    strapiHomePage: { title, content, marqueeImage },
  } = data;
  const image = getImage(marqueeImage);

  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="home">
      <SEO title="Home" keywords={[`terlingua`, `chili`, `cook`, "off"]} />
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <Feature items={marqueeData} />
        <Quote quote={content}></Quote>

        <CardGallery />

        <TextDisplay />
        <GatsbyImage
          image={image}
          alt="Hillside Journey!"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
        <Checkout />
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
      content {
        author
        text
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
