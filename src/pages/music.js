import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import CardGallery from "components/CardGallery";

const MusicPage = ({ data }) => {
  const {
    strapiHomePage: { title, content, marqueeImage },
  } = data;
  const image = getImage(marqueeImage);

  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="music">
      <SEO
        title="Home"
        keywords={[`music`, `artists`, `terlingua`, `chili`, `cook`, "off"]}
      />
      <Helmet>
        <title>Music</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <CardGallery />
        <GatsbyImage
          image={image}
          alt="Hillside Journey!"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
      </Container>
    </Layout>
  );
};

export default MusicPage;

export const pageQuery = graphql`
  query MusicQuery {
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
