import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  const panel = getImage(panelImage);
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
      <a
        href="https://shop.gandyink.com/oticcc22"
        target="_blank"
        className="block my-10 px-8"
      >
        <div className="relative inline-block shadow-md group">
          <div className="-skew-x-12 inline-block px-8 py-3 skew-x-10 shadow-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-5xl bg-primary-light group-hover:bg-secondary text-white transition ease-linear pointer-events-none">
            <div className="skew-x-12">Visit Store</div>
          </div>
          <GatsbyImage
            image={getImage(cookoffStoreImg.image)}
            alt="terlingua cook off store ad"
          />
        </div>
      </a>
      {/* <OfficialCookOffPoster className="hidden lg:block" /> */}
      <SponsorsGrid sponsorLogos={sponsorLogos.edges} />
      <ImageGallery images={posters} />
      <Quote quote={content}></Quote>
      <Spacer />
      <PanelImage image={panel} />
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
