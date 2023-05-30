import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome';

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
      <div className="max-w-8xl w-full mx-auto ">
        <div className="bg-tertiary max-w-7xl mx-auto shadow-md rounded-sm md:mb-10 md:-skew-x-12 mb-10">
          <h1 className="underline md:no-underline px-4 py-4 md:py-0 md:skew-x-12">
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
  const id = `${edge.node.photographer
    .replaceAll(' ', '-')
    .toLowerCase()}-collage`;

  const handleFullscreenImage = (id) => {
    const elem = document.getElementById(id);
    if (elem.requestFullscreen) {
      elem.requestFullscreen({ navigationUI: 'show' });
    }
  };

  return (
    <div className="mb-10">
      <div className="flex items-center px-4 md:px-8 justify-between md:-skew-x-12 bg-primary text-white shadow-md rounded-sm md:mb-10 mx-auto max-w-7xl">
        <div onClick={() => handleFullscreenImage(id)}>
          <FontAwesomeIcon
            icon="expand"
            className={`${iconStyles} hidden md:block`}
          ></FontAwesomeIcon>
        </div>
        <h3 className="md:skew-x-12">{edge.node.photographer}</h3>
        <a href={edge.node.image.publicURL} download>
          <FontAwesomeIcon
            icon="download"
            className={iconStyles}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="bg-tertiary p-2 md:p-6 lg:p-10">
        <GatsbyImage
          image={getImage(edge.node.image)}
          alt={`2022 Mural of photographer ${edge.node.photographer}`}
          className=""
          id={id}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query Mural2022Query {
    murals: allStrapiGalleryImages(
      filter: { role: { eq: "mural" }, year: { eq: 2022 } }
    ) {
      edges {
        node {
          image {
            childImageSharp {
              gatsbyImageData
            }
            publicURL
          }
          photographer
        }
      }
    }
  }
`;
