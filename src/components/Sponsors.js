import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Sponsors() {
  const data = useStaticQuery(graphql`
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
  `);

  const sponsors = data.allStrapiSponsors.edges.map((edge) => {
    return getImage(edge.node.logo);
  });

  return (
    <div className="sponsors">
      <div className="sponsors__list">
        {sponsors.map((logo, index) => {
          return (
            <div key={index} className="sponsors__item">
              <GatsbyImage
                image={logo}
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
