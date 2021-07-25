import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import Musician from "components/Musician";

const MusicianTemplate = ({ data }) => {
  const { strapiMusicians } = data;
  const artist = { ...strapiMusicians };
  const marqueeData = { title: artist.name, marqueeImage: artist.marqueeImage };

  return (
    <Layout pageName="musician">
      <SEO
        title={artist.name}
        keywords={[`${artist.name}`, `terlingua`, `chili`, `cook`, "off"]}
        description={artist.meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <Musician artist={artist} />
      </Container>
    </Layout>
  );
};

export default MusicianTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    strapiMusicians(id: { eq: $id }) {
      meta {
        description
      }
      website
      spotifyID
      name
      musicVideoID
      description
      setTime
      marqueeImage: image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      artistImage: image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 600, maxHeight: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      squareImage {
        childImageSharp {
          gatsbyImageData
          fluid(quality: 90, maxWidth: 600, maxHeight: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
