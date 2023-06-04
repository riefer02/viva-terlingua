import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome';
import Spacer from 'components/Spacer';

export default function Mural2022({
  data: {
    murals: { edges },
  },
}) {
  return (
    <Layout>
      <Seo
        title={'Collages for the 2022 Terlingua International Chili Cook Off'}
        description={`Come witness the collages from different photographers for the 2022 Terlingua International Chili Cook Off, the greatest chili cook off in Texas! Discover the eyes and skills of the the talented photographers who brought them to life. Join us for a celebration of all things chili and an unforgettable views of Terlingua. Don't miss out on this beautiful event in Terlingua, Texas.`}
        keywords={[
          `terlingua`,
          `chili`,
          `cook off`,
          `tolbert`,
          `wick fowler`,
          `original`,
          'international',
          'collages',
          'photography',
          '2022',
        ]}
      />
      <div className="max-w-7xl w-full mx-auto">
        <div className="bg-secondary py-4 px-2 shadow-md rounded-sm mb-10 md:mb-10 lg:-skew-x-12 border-gray-light-1 border-2 max-w-5xl mx-auto">
          <h1 className="underline md:no-underline py-4 md:py-0 lg:skew-x-12 inline-block text-2xl text-gray-light-1">
            2022 Terlingua Chili Cook Off Collages
          </h1>
        </div>

        <div className="px-8">
          {edges.map((edge, index) => (
            <CollageItem key={index} edge={edge} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function CollageItem({ edge }) {
  const iconStyles = 'text-4xl md:text-3xl cursor-pointer md:skew-x-12';
  const id = `${edge.node?.photographer
    .replaceAll(' ', '-')
    .toLowerCase()}-collage`;

  const handleFullscreenImage = (id) => {
    const elem = document.getElementById(id);
    if (elem.requestFullscreen) {
      elem.requestFullscreen({ navigationUI: 'show' });
    }
  };

  return (
    <div className="">
      <div className="flex max-w-xl mx-auto items-center px-4 md:px-8 justify-between md:-skew-x-12 bg-primary-light py-3 text-white shadow-md rounded-sm md:mb-10">
        <div onClick={() => handleFullscreenImage(id)}>
          <FontAwesomeIcon
            icon="expand"
            className={`${iconStyles} hidden md:block`}
          ></FontAwesomeIcon>
        </div>
        <h3 className="md:skew-x-12 text-xl lg:text-2xl">
          {edge.node?.photographer}
        </h3>
        <a href={edge.node?.image?.publicURL} download>
          <FontAwesomeIcon
            icon="download"
            className={iconStyles}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="rounded-lg max-w-3xl mx-auto mt-4">
        <GatsbyImage
          image={getImage(edge?.node?.image?.localFile)}
          alt={`2022 Mural of photographer ${edge.node?.photographer}`}
          className="rounded-lg"
          id={id}
        />
      </div>
      <Spacer />
    </div>
  );
}

export const pageQuery = graphql`
  query Mural2022Query {
    murals: allStrapiGalleryImage(
      filter: { role: { eq: "mural" }, year: { eq: 2022 } }
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
          photographer
        }
      }
    }
  }
`;
