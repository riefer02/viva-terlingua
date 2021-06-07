import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import CardGallery from "components/CardGallery";

const EventsPage = ({ data }) => {
  const {
    allStrapiLocalAttractions,
    strapiHomePage: { title, marqueeImage },
  } = data;
  console.log(allStrapiLocalAttractions);

  const image = getImage(marqueeImage);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="events">
      <SEO
        title="Events"
        keywords={[`events`, `music`, `artists`, `terlingua`, `chili`, `cook`]}
      />
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <CardGallery items={allStrapiLocalAttractions.edges} />
        <GatsbyImage
          image={image}
          alt="Hillside Journey!"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
      </Container>
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query LocalAttractionsQuery {
    strapiHomePage {
      id
      title
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allStrapiLocalAttractions {
      edges {
        node {
          description
          image: marqueeImage {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
              fluid(quality: 90, maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
          slug
          type
          url
        }
      }
    }
  }
`;
