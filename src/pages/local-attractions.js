import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import CardGallery from "components/CardGallery";
import PanelImage from "components/PanelImage";

const EventsPage = ({ data }) => {
  const { allStrapiLocalAttractions, primaryImage, panel } = data;

  const title = `Local Attractions`;
  const marqueeImage = primaryImage.image;
  const panelImage = getImage(panel.image);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="events">
      <SEO
        title="Events"
        keywords={[`events`, `music`, `artists`, `terlingua`, `chili`, `cook`]}
        description="Local Attractions in the Terlingua Mining Valley. Good for any visiting Chili head with a cold beer in their hands. Drink and Drink responsibly."
      />
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <CardGallery items={allStrapiLocalAttractions.edges} />
        <PanelImage image={panelImage} />
      </Container>
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query LocalAttractionsQuery {
    primaryImage: strapiGalleryImages(title: { eq: "2-Alarm Chili" }) {
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      description
    }
    panel: strapiGalleryImages(title: { eq: "Watching the Show" }) {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData
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
          type
          url
        }
      }
    }
  }
`;
