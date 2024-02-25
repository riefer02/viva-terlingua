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
import SectionTitle from '../components/SectionTitle';
// import OfficialCookOffPoster from '../components/OfficialCookOffPoster';
import ClientOnly from '../components/ClientOnly';

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
      <ClientOnly>
        <Marquee marquee={marqueeData} />
      </ClientOnly>
      {/* <OfficialCookOffPoster className="lg:hidden" /> */}
      {/* <OfficialCookOffPoster className="hidden lg:block" /> */}
      <Spacer />
      <Feature items={featured.featuresList} />
      <Spacer />
      <SectionTitle title="news and announcements" />
      <CardCarousel cardsData={allStrapiBlog.edges} />

      <Spacer />
      <SponsorsGrid sponsorLogos={sponsorLogos.edges} />
      <Spacer />
      <ImageGallery images={posters} />
      <Spacer />
      <Quote quote={content}></Quote>
      <Spacer />
      <PanelImage image={panelImage} />
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
    allStrapiBlog(sort: { publishedAt: DESC }) {
      edges {
        node {
          title
          description
          publishedAt
          tags {
            name
            slug
          }
          heroImage {
            imageMedia {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`;
