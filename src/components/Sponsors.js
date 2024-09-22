import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Sponsors() {
  const data = useStaticQuery(graphql`
    query SponsorsQuery {
      allStrapiSponsor(sort: { priority: ASC }, limit: 8) {
        edges {
          node {
            website
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="hidden md:block absolute z-30 w-full overflow-visible bg-gradient-to-b from-gray-400 to-transparent">
      <div className="relative flex items-center justify-center w-full md:pt-2 lg:w-auto lg:pt-2 gap-4">
        {data.allStrapiSponsor.edges.map((sponsor, index) => {
          const logoFile = sponsor.node.logo?.localFile?.childImageSharp;
          const image = logoFile ? getImage(logoFile) : null;
          const website = sponsor.node.website;

          if (!image) return null;

          const ImageElement = (
            <GatsbyImage
              image={image}
              alt="Sponsor Logo"
              className="h-full w-full"
              key={index}
            />
          );

          return (
            <div key={index} className="md:max-w-[50px] lg:max-w-[80px]">
              {website ? (
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {ImageElement}
                </a>
              ) : (
                ImageElement
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
