import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import CardGallery from 'components/CardGallery';
import PanelImage from 'components/PanelImage';
import Itinerary from 'components/Itinerary';

const itinerary = [
  {
    date: 'Wednesday, November 2nd',
    events: [
      { time: '5:00pm', event: 'Los Pinche Gringos' },
      { time: '7:15pm', event: 'Kathryn Legendre' },
      { time: '9:30pm', event: 'Ray Wylie Hubbard' },
    ],
  },
  {
    date: 'Thursday, November 3rd',
    events: [
      { time: '7:15pm', event: 'Thomas Michael Riley' },
      { time: '9:30pm', event: 'Nikki Lane' },
    ],
  },
  {
    date: 'Friday, November 4th',
    events: [
      { time: '7:15pm', event: 'Nathan Colt Young' },
      { time: '9:30pm', event: 'Matt Castillo' },
    ],
  },
  {
    date: 'Saturday, November 5th',
    events: [
      { time: '7:15pm', event: 'Mark David Manders' },
      { time: '9:30pm', event: 'Gary P. Nunn' },
    ],
  },
];

const MusicPage = ({ data }) => {
  const { allStrapiMusician, primaryImage, panelImage } = data;
  const marqueeImage = primaryImage.image;
  const panel = getImage(panelImage.image.childImageSharp);
  const title = `Music`;
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Seo
        title="Music"
        keywords={[`music`, `artists`, `terlingua`, `chili`, `cook`, 'off']}
        description={seo.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <CardGallery items={allStrapiMusician.edges} />
        <Itinerary itinerary={itinerary} />
        <PanelImage image={panel} />
      </Container>
    </Layout>
  );
};

export default MusicPage;

export const pageQuery = graphql`
  query MusicQuery {
    panelImage: strapiGalleryImage(
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
    primaryImage: strapiGalleryImage(
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
    allStrapiMusician(sort: { fields: [order], order: ASC }) {
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
