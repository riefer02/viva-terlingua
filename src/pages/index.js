import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Quote from 'components/Quote';
import Feature from 'components/Feature';
import PanelImage from 'components/PanelImage';
import ImageGallery from 'components/ImageGallery';
import SponsorsCarousel from 'components/molecules/SponsorsCarousel';
import Spacer from '../components/atoms/Spacer';

const IndexPage = ({ data }) => {
  const {
    strapiHomePage: {
      title,
      content,
      marqueeImage,
      featured,
      meta,
      panelImage,
      secondaryText,
    },
    posters,
    sponsorLogos
  } = data;
  const panel = getImage(panelImage);
  const marqueeData = { title, marqueeImage, subhead: secondaryText };
  const carouselContent = {
    header: 'We Love Our Sponsors',
    text: 'The Original Terlingua International Championship Chili Cook Off is happy to have such wonderful organizations backing this years event!',
    images: sponsorLogos.edges,
  };

  return (
    <Layout>
      <Seo
        title={'Home'}
        description={meta.description}
        keywords={[
          `terlingua`,
          `chili`,
          `cook off`,
          `tolbert`,
          `wick fowler`,
          `original`,
          'international',
        ]}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <Feature items={featured.featuresList} />
        <SponsorsCarousel content={carouselContent} />
        <ImageGallery images={posters} />
        <Quote quote={content}></Quote>
        <PanelImage image={panel} />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    strapiHomePage {
      id
      title
      content: quoteContent {
        author
        text
      }
      secondaryText
      meta {
        description
      }
      featured {
        id
        featuresList {
          id
          slug
          title
          image {
            childImageSharp {
              gatsbyImageData
              fluid(quality: 90, maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          description
          calloutText
        }
      }
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      panelImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    posters: allStrapiGalleryImages(filter: { role: { eq: "poster" } }) {
      edges {
        node {
          image {
            childImageSharp {
              gatsbyImageData(
                webpOptions: { quality: 50 }
                placeholder: BLURRED
                formats: [WEBP]
              )
            }
            publicURL
          }
        }
      }
    }
    sponsorLogos: allStrapiSponsors {
      edges {
        node {
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
