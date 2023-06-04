import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { ordinalSuffixOf } from '../../utils/helpers';
import Spacer from 'components/Spacer';

export default function Champions2022Page({
  data: { saturdayChili, limitedShow, openShow },
}) {
  const [activeEvent, setActiveEvent] = useState('Saturday Chili');

  const events = [
    {
      eventName: 'Saturday Chili',
      champions: saturdayChili.edges,
    },
    {
      eventName: 'Limited Show',
      champions: limitedShow.edges,
    },
    {
      eventName: 'Open Show',
      champions: openShow.edges,
    },
  ];

  const handleFilterClick = (eventName) => {
    setActiveEvent(eventName);
  };

  return (
    <div>
      <Layout>
        <Seo
          title={'Champions and Winners of the 2022 Terlingua Chili Cook Off'}
          description={`Come see the champions and winners of the 2022 Terlingua International Chili Cook Off, the greatest chili cook off in Texas! Discover the winning teams and meet the talented chefs who brought them to life. Join us for a celebration of all things chili and an unforgettable taste of the Southwest. Don't miss out on this annual culinary event in Terlingua, Texas.`}
          keywords={[
            `terlingua`,
            `chili`,
            `cook off`,
            `tolbert`,
            `wick fowler`,
            `original`,
            'international',
            'winners',
            'champions',
            '2022',
          ]}
        />
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-secondary py-4 px-2 mx-auto shadow-md rounded-sm mb-4 md:mb-10 md:-skew-x-12 border-gray-light-1 border-2 max-w-5xl">
            <h1 className="underline md:no-underline py-4 md:py-0 md:skew-x-12 inline-block text-2xl text-gray-light-1">
              Cook Off Champions 2022
            </h1>
          </div>
          <div className="block md:hidden md:text-lg pt-2 lg:py-4 bg-tertiary rounded-t-lg">
            Filters Options:
          </div>
          <div className="grid grid-cols-2 mb-4 p-4 lg:py-8 md:py-3 mx-auto rounded-b-lg lg:rounded-lg max-w-3xl md:flex flex-col md:flex-row gap-4 items-center justify-center text-base bg-tertiary border-b-2 md:border-0 border-b-tertiary shadow-md">
            <div className="hidden md:block">Filters:</div>
            {events.map((event, index) => (
              <div
                key={index}
                className={`${
                  activeEvent === event.eventName
                    ? 'bg-secondary shadow-sm text-gray-light-1 border-gray-light-1'
                    : ' bg-primary-light text-gray-light-1'
                } py-1 px-4 transition ease-linear cursor-pointer border md:-skew-x-12`}
                onClick={() => handleFilterClick(event.eventName)}
              >
                <div className="md:skew-x-12">{event.eventName}</div>
              </div>
            ))}
          </div>
          <div className="lg:py-10">
            {events.map((event, index) => (
              <div
                key={index}
                className={`md:py-5 ${
                  activeEvent === event.eventName ? 'block' : 'hidden'
                }`}
              >
                <div className="-skew-x-12 inline-block px-8 py-1 relative skew-x-10 shadow-md bg-primary-light mb-8">
                  <h3 className="skew-x-12 font-primary p-2 text-white drop-shadow-lg capitalize text-2xl">
                    {event.eventName}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-10 w-full">
                  {event.champions.map((node) => (
                    <ChampionCard winner={node} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Spacer/>
      </Layout>
    </div>
  );
}

function ChampionCard({ winner }) {
  const { name, rank, image, description, competition } = winner.node;
  const ranking = ordinalSuffixOf(rank);

  return (
    <li className="flex flex-col items-center justify-center bg-tertiary-light rounded-lg p-6 py-8 shadow-md">
      <div className="w-full md:w-96 lg:w-80 mb-6 overflow-hidden rounded-lg">
        <GatsbyImage
          image={getImage(image)}
          alt={`${name}, ${ranking} Place, Saturday Chili Competition`}
          imgStyle={{ borderRadius: '8px' }}
          className="rounded-lg"
        />
      </div>
      <div className="text-base lg:text-lg mb-2">{ranking} Place</div>
      <h4 className="text-lg lg:text-xl">{name}</h4>
    </li>
  );
}

export const pageQuery = graphql`
  query Champions2022Query {
    saturdayChili: allStrapiWinner(
      filter: { competition: { eq: "saturdaychili" }, year: { eq: 2022 } }
      sort: { fields: rank, order: ASC }
    ) {
      edges {
        node {
          rank
          name
          id
          competition
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    limitedShow: allStrapiWinner(
      filter: { competition: { eq: "limitedshow" }, year: { eq: 2022 } }
      sort: { fields: rank, order: ASC }
    ) {
      edges {
        node {
          rank
          name
          id
          competition
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    openShow: allStrapiWinner(
      filter: { competition: { eq: "openshow" }, year: { eq: 2022 } }
      sort: { fields: rank, order: ASC }
    ) {
      edges {
        node {
          rank
          name
          id
          competition
          image {
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
