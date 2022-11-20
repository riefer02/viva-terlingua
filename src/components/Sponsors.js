import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Sponsors() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
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
      `}
      render={(data) => (
        <div className="sponsors">
          <div className="sponsors__list">
            {data.allStrapiSponsor.edges.map((edge, index) => {
              return (
                <div key={index} className="sponsors__item">
                  <GatsbyImage
                    image={getImage(edge.node.logo)}
                    alt="sponsor"
                    className="sponsors__logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
}
