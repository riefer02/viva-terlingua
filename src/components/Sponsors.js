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
    <div className="sponsors">
      <div className="sponsors__list">
        {data.allStrapiSponsor.edges.map((edge, index) =>  {
          if(!edge.node.logo) return
          
          return (
            <div key={index} className="sponsors__item">
              <GatsbyImage
                image={getImage(edge.node.logo.localFile.childImageSharp)}
                alt="sponsor"
                className="sponsors__logo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
