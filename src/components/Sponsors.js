import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Sponsors() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allStrapiSponsors {
            edges {
              node {
                logo {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                    fluid(
                      quality: 90
                      maxWidth: 384
                      maxHeight: 216
                      grayscale: true
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
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
            {data.allStrapiSponsors.edges.map((edge, index) => {
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

            {/* {sponsors.map((logo, index) => {
              return (
                <div key={index} className="sponsors__item">
                  <GatsbyImage
                    image={logo}
                    alt="sponsor"
                    className="sponsors__logo"
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      )}
    />
  );
}
