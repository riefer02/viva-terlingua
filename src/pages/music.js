import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import CardGallery from "components/CardGallery";

const MusicPage = ({ data }) => {
  const {
    allStrapiMusicians,
    strapiHomePage: { marqueeImage },
  } = data;
  const image = getImage(marqueeImage);
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
        <CardGallery items={allStrapiMusicians.edges} />
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
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allStrapiMusicians {
      edges {
        node {
          name
          setTime
          slug
          image {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
              fluid(quality: 90, maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
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
