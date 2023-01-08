import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Quote from 'components/Quote';
import Feature from 'components/Feature';
import PanelImage from 'components/PanelImage';
import ImageGallery from 'components/ImageGallery';
import SponsorsGrid from 'components/molecules/SponsorsGrid';
import Spacer from 'components/atoms/Spacer';
import OfficialCookOffPoster from '../components/atoms/OfficialCookOffPoster';
import StoreCallout from '../components/atoms/StoreCallout';

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
    sponsorLogos,
    cookoffStoreImg,
  } = data;

  const marqueeData = { title, marqueeImage, subhead: secondaryText };

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
      {/* <OfficialCookOffPoster className="lg:hidden" /> */}
      <Feature items={featured.featuresList} />
      {/* <StoreCallout image={cookoffStoreImg.image} /> */}
      {/* <OfficialCookOffPoster className="hidden lg:block" /> */}
      <Spacer/>
      <SponsorsGrid sponsorLogos={sponsorLogos.edges} />
      <ImageGallery images={posters} />
      <Quote quote={content}></Quote>
      <Spacer />
      <PanelImage image={panelImage} />
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
    sponsorLogos: allStrapiSponsors(sort: { fields: priority, order: ASC }) {
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
    cookoffStoreImg: strapiGalleryImages(title: { eq: "cookoff-store-flyer" }) {
      image {
        childImageSharp {
          gatsbyImageData(width: 880, quality: 100)
        }
      }
    }
  }
`;
