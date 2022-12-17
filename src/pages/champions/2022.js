import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import { ordinalSuffixOf } from '../../utils/helpers';

export default function Champions2022Page({
  data: { saturdayChili, limitedShow, openShow },
}) {
  const [events, setEvents] = useState([
    {
      eventName: 'Saturday Chili',
      champions: saturdayChili.edges,
      showEvent: true,
    },
    {
      eventName: 'Limited Show',
      champions: limitedShow.edges,
      showEvent: true,
    },
    {
      eventName: 'Open Show',
      champions: openShow.edges,
      showEvent: true,
    },
  ]);

  const handleFilterClick = (eventName) => {
    setEvents((prevState) => {
      let targetIndex;
      const copyEvents = [...prevState];
      copyEvents.forEach((event, index) => {
        if (event.eventName === eventName) targetIndex = index;
      });
      copyEvents[targetIndex].showEvent = !copyEvents[targetIndex].showEvent;

      return copyEvents;
    });
  };

  return (
    <div>
      <Layout>
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-tertiary shadow-md rounded-sm md:mb-10 md:-skew-x-12">
            <h1 className="underline md:no-underline py-4 md:py-0 md:skew-x-12">
              Cook Off Champions 2022
            </h1>
          </div>
          <div className="block md:hidden text-3xl py-4 bg-tertiary">
            Filters Options:
          </div>
          <div className="md:-skew-x-12 grid grid-cols-2 p-4 py-8 md:py-4 md:flex flex-col md:flex-row gap-10 items-center justify-center text-2xl bg-secondary text-white shadow-md">
            <div className="hidden md:block md:skew-x-12">Filters:</div>
            {events &&
              events.map((event, index) => (
                <div
                  key={index}
                  className={`${
                    event.showEvent
                      ? 'bg-tertiary shadow-sm text-gray-dark border-tertiary'
                      : 'bg-grey-dark'
                  } py-2 px-4 transition ease-linear cursor-pointer border -skew-x-12 md:skew-x-0`}
                  onClick={() => handleFilterClick(event.eventName)}
                >
                  <div className="skew-x-12">{event.eventName}</div>
                </div>
              ))}
          </div>
          <div className="lg:py-10">
            {events.map((event, index) => (
              <div
                key={index}
                className={`md:py-5 ${event.showEvent ? 'block' : 'hidden'}`}
              >
                <h3 className="md:mb-10 py-4 md:py-0 bg-primary-light text-white shadow-md md:-skew-x-12">
                  <div className="md:skew-x-12">{event.eventName}</div>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-10 w-full">
                  {event.champions.map((node) => (
                    <ChampionCard winner={node} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

function ChampionCard({ winner }) {
  const { name, rank, image, description, competition } = winner.node;
  const ranking = ordinalSuffixOf(rank);

  return (
    <li className="flex flex-col items-center justify-center bg-tertiary p-6 py-8 shadow-md rounded-sm">
      <div className="w-full md:w-96 lg:w-80 mb-6 overflow-hidden rounded-lg">
        <GatsbyImage
          image={getImage(image)}
          alt={`${name}, ${ranking} Place, Saturday Chili Competition`}
          imgStyle={{ borderRadius: '8px' }}
        />
      </div>
      <div className="text-2xl lg:text-xl">{ranking} Place</div>
      <h4 className="text-3xl lg:text-2xl">{name}</h4>
    </li>
  );
}

export const pageQuery = graphql`
  query Champions2022Query {
    saturdayChili: allStrapiWinners(
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
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    limitedShow: allStrapiWinners(
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
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    openShow: allStrapiWinners(
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
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
