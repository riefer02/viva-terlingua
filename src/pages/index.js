import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Quote from 'components/Quote';
import Feature from 'components/Feature';
import PanelImage from 'components/PanelImage';
import ImageGallery from 'components/ImageGallery';
import SponsorsGrid from 'components/SponsorsGrid';
import Spacer from 'components/Spacer';
import CardCarousel from '../components/CardCarousel';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import OfficialCookOffPoster from '../components/OfficialCookOffPoster';

const IndexPage = ({ data }) => {
  const {
    allStrapiBlog,
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
    trophySponsorsImg,
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
          `championship`,
          `tolbert`,
          `wick fowler`,
          `original`,
          'international',
        ]}
      />
      <Marquee marquee={marqueeData} />
      {/* <OfficialCookOffPoster className="lg:hidden" /> */}
      {/* <OfficialCookOffPoster className="hidden lg:block" /> */}
      <Spacer />
      <Feature items={featured.featuresList} />
      <Spacer />
      <CardCarousel cardsData={allStrapiBlog.edges} />
      <div className="max-w-xl mx-auto">
        <GatsbyImage image={getImage(trophySponsorsImg.image.localFile)} />
      </div>
      <Spacer />
      <SponsorsGrid sponsorLogos={sponsorLogos.edges} />
      <Spacer />
      <ImageGallery images={posters} />
      <Spacer />
      <Quote quote={content}></Quote>
      <Spacer />
      <PanelImage image={panelImage} />
      <Spacer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    strapiHomePage {
      id
      title
      secondaryText
      featured {
        featuresList {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          calloutText
          id
          slug
          title
          description
        }
      }
      meta {
        description
      }
      marqueeImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      panelImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      content: quoteContent {
        author
        text
      }
    }
    posters: allStrapiGalleryImage(
      filter: { role: { eq: "poster" } }
      sort: { title: ASC }
    ) {
      edges {
        node {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
    sponsorLogos: allStrapiSponsor {
      edges {
        node {
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
<<<<<<< HEAD
    allStrapiBlog {
      edges {
        node {
          title
          author
          publishedAt
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
=======
    trophySponsorsImg: strapiGalleryImage(
      title: { eq: "Trophy Sponsors 2023" }
    ) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 745)
>>>>>>> master
          }
        }
      }
    }
  }
`;
