import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import CardGallery from "components/CardGallery";
import PanelImage from "components/PanelImage";
import Itinerary from "components/Itinerary";

const MusicPage = ({ data }) => {
  const { allStrapiMusicians, primaryImage, panelImage } = data;
  const marqueeImage = primaryImage.image;
  const panel = getImage(panelImage.image.childImageSharp);
  const title = `Music`;
  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="music">
      <SEO
        title="Music"
        keywords={[`music`, `artists`, `terlingua`, `chili`, `cook`, "off"]}
        description={seo.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <Itinerary />
        <CardGallery items={allStrapiMusicians.edges} />
        <PanelImage image={panel} />
      </Container>
    </Layout>
  );
};

export default MusicPage;

export const pageQuery = graphql`
  query MusicQuery {
    panelImage: strapiGalleryImages(
      role: { eq: "panel" }
      page: { eq: "music" }
    ) {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    primaryImage: strapiGalleryImages(
      role: { eq: "marquee" }
      page: { eq: "music" }
    ) {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    allStrapiMusicians(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          name
          setTime
          slug
          image {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
              fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          squareImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const seo = {
  description: `Tolbert's International Chili Cook Off Musicians and Musical Acts. Who's playing live music in the desert? Eight performing acts across four nights. The Wick Fowler, Tolbert's Terlingua chili and music festival has all you need for a great time. Beer, sun, chili, friends, and fun.`,
};
