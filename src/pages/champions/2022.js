import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { ordinalSuffixOf } from '../../utils/helpers';

export default function Champions2022Page({ data: { saturdayChili } }) {
  console.log(saturdayChili.edges);
  return (
    <div>
      <Header />
      <main className="min-h-[80vh] mt-40 sm:mt-60 lg:mt-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-tertiary shadow-md rounded-sm">
            <h1 className="">Cook Off Champions 2022</h1>
          </div>
          <div className="py-10">
            <h3 className="mb-10 bg-primary-light text-white shadow-md">Saturday Chili</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-10 w-full">
              {saturdayChili.edges.map((node) => (
                <ChampionCard winner={node} />
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
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
