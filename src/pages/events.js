import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import CardGallery from 'components/CardGallery';

const EventsPage = ({ data }) => {
  const {
    allStrapiEvents,
    strapiGalleryImages: { marqueeImage },
  } = data;
  const title = `News & Events`;
  const image = getImage(marqueeImage);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Seo
        title={`News & Events`}
        keywords={[`events`, `music`, `artists`, `terlingua`, `chili`, `cook`]}
        description={seo.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <CardGallery items={allStrapiEvents.edges} />
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
  query EventQuery {
    strapiGalleryImages {
      title
      marqueeImage: image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    allStrapiEvents {
      edges {
        node {
          slug
          startDateTime
          name: title
          image: marqueeImage {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
          squareImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
    }
  }
`;

const seo = {
  description: `Events, dates, times, and details for the Tolbert's International Chili Cook Off in Terlingua, Texas. How to enter, where to go, things to do around town, all we be listed here in the events page of the chili music festival. Beer, fun, sun, and friends.`,
};
