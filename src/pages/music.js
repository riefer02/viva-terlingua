import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import CardGallery from 'components/CardGallery';
import PanelImage from 'components/PanelImage';
import Spacer from 'components/Spacer';

const itinerary = [
  {
    date: 'Wednesday, October 30',
    events: [
      { time: '7:00-8:00', event: 'The Moonshiners' },
      { time: '8:30-10:00', event: 'The Butch Hancock Band' },
      { time: '10:30-12:00', event: 'James McMurtry' },
    ],
  },
  {
    date: 'Thursday, October 31',
    events: [
      { time: '7:00-8:15', event: 'Scott Walker Band' },
      { time: '8:45-10:00', event: 'Thomas Michael Riley' },
      { time: '10:30-12:00', event: 'Gary P. Nunn' },
    ],
  },
  {
    date: 'Friday, November 1',
    events: [
      { time: '8:00-9:30', event: 'Mark David Manders' },
      { time: '10:00-close', event: 'Kaitlin Butts' },
    ],
  },
  {
    date: 'Saturday, November 2',
    events: [
      { time: '8:00-9:30', event: 'Summer Dean' },
      { time: '10:00-close', event: 'Los Pinche Gringos' },
    ],
  },
];

const MusicPage = ({ data }) => {
  const { allStrapiMusician, primaryImage, panelImage } = data;
  const marqueeImage = primaryImage?.image;
  const panel = getImage(panelImage.image);
  const title = `Music & Artists Lineup`;
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Seo
        title={title}
        keywords={[`music`, `artists`, `terlingua`, `chili`, `cook`, 'off']}
        description={`Tolbert's Original Terlingua International Chili Cook Off Musicians and Musical Acts. Who's playing live music in the desert? Eight performing acts across four nights. The Wick Fowler, Tolbert's Terlingua chili and music festival has all you need for a great time. Beer, sun, chili, friends, and fun.`}
      />
      <Marquee marquee={marqueeData} />
      <Spacer />
      <div className="bg-tertiary-light p-4 rounded-lg shadow max-w-sm sm:max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 text-center">
          2024 Music Lineup
        </h2>
        {itinerary?.length > 0 ? (
          <ul className="md:grid sm:grid-cols-2 gap-6 md:gap-8">
            {itinerary.map((day, index) => (
              <li key={index} className="md:col-span-1">
                <h3 className="font-bold text-lg md:text-xl my-2 border-b border-primary-light">
                  {day.date}
                </h3>
                <ul className="space-y-2">
                  {day.events.map((event, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-light-1 py-4 px-3 rounded-md shadow"
                    >
                      <span className="font-medium text-sm md:text-md">
                        {event.time}
                      </span>
                      <span className="font-light text-sm md:text-md">
                        {event.event}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-lg font-light">
            Lineup for 2024 to be determined.
          </p>
        )}
      </div>
      <Spacer />
      <CardGallery items={allStrapiMusician.edges} />
      <Spacer />
      <PanelImage image={panel} />
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
        localFile {
          childImageSharp {
            gatsbyImageData
          }
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
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allStrapiMusician(sort: { order: ASC }, filter: { year: { eq: 2024 } }) {
      edges {
        node {
          name
          setTime
          slug
          image {
            id
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
    }
  }
`;
