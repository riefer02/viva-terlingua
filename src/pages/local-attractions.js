import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import CardGallery from 'components/CardGallery';
import PanelImage from 'components/PanelImage';
import Spacer from 'components/Spacer';

const EventsPage = ({ data }) => {
  const { allStrapiLocalAttraction, primaryImage, panel } = data;

  const title = `Local Attractions`;
  const marqueeImage = primaryImage?.image;
  const panelImage = getImage(panel?.image);
  const marqueeData = { title, marqueeImage };
  console.log(marqueeData);

  return (
    <Layout>
      <Seo
        title="Events"
        keywords={[`events`, `music`, `artists`, `terlingua`, `chili`, `cook`]}
        description="Local Attractions in the Terlingua Mining Valley. Good for any visiting Chili head with a cold beer in their hands. Drink and Drink responsibly."
      />
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <CardGallery items={allStrapiLocalAttraction.edges} />
        <Spacer />
        <PanelImage image={panelImage} />
      </Container>
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query LocalAttractionsQuery {
    primaryImage: strapiGalleryImage(title: { eq: "Camp and Sky" }) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      title
      description
    }
    panel: strapiGalleryImage(title: { eq: "Watching the Show" }) {
      title
      description
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allStrapiLocalAttraction {
      edges {
        node {
          description
          image: marqueeImage {
            id
            localFile {
              childImageSharp {
                gatsbyImageData
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
