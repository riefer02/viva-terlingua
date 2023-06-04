import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Sponsors() {
  const data = useStaticQuery(graphql`
    query SponsorsQuery {
      allStrapiSponsor(sort: { fields: priority, order: ASC }, limit: 8) {
        edges {
          node {
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
    <div className="hidden md:block absolute z-30 w-full overflow-visible bg-gradient-to-b from-gray-dark to-transparent">
      <div className="relative flex items-center justify-center w-full md:pt-2 lg:w-auto lg:pt-2 gap-4">
        {data.allStrapiSponsor.edges.map((edge, index) => {
          if (!edge.node.logo) return;

          return (
            <div key={index} className="md:max-w-[40px] lg:max-w-[60px]">
              <GatsbyImage
                image={getImage(edge.node.logo.localFile.childImageSharp)}
                alt="sponsor"
                className="h-full w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
