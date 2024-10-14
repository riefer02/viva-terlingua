import React from 'react';
import { graphql, Link } from 'gatsby';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

const IndexPage = ({ data }) => {
  const {
    scheduleOfEvents,
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
      <Marquee marquee={marqueeData} />
      {/* <OfficialCookOffPoster className="lg:hidden" /> */}
      {/* <OfficialCookOffPoster className="hidden lg:block" /> */}
      <div className="flex pt-8 items-center justify-center">
        <div className="-skew-x-12 inline-block px-8 py-1 relative skew-x-10 rounded-lg shadow-md bg-tertiary-light mb-8">
          <a
            href={scheduleOfEvents?.file?.localFile?.publicURL}
            className="skew-x-12 flex justify-center items-center gap-4 font-primary p-2 text-gray-800 drop-shadow-lg capitalize lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            2024 Official Schedule of Events
            <FontAwesomeIcon
              className="text-xl"
              icon="eye"
              title="View"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
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
    scheduleOfEvents: strapiResource(
      name: { eq: "2024 Terlingua Cook Off Schedule of Events" }
    ) {
      id
      name
      file {
        localFile {
          publicURL
        }
      }
    }
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
          website
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
