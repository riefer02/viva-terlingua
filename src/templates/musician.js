import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Musician from 'components/Musician';
import Spacer from 'components/Spacer';

const MusicianTemplate = ({ data }) => {
  const { strapiMusician } = data;
  const artist = { ...strapiMusician };
  const marqueeData = { title: artist.name, marqueeImage: artist.marqueeImage };

  return (
    <Layout>
      <Seo
        title={artist.name}
        keywords={[`${artist.name}`, `terlingua`, `chili`, `cook`, 'off']}
        description={artist.meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Spacer />
      <Musician artist={artist} />
      <Spacer />
    </Layout>
  );
};

export default MusicianTemplate;

export const pageQuery = graphql`
  query MusicianTemplateQuery($id: String!) {
    strapiMusician(id: { eq: $id }) {
      meta {
        description
      }
      website
      spotifyID
      name
      musicVideoID
      description
      setTime
      year
      marqueeImage: image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      artistImage: image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      squareImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
