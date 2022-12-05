import React from 'react';
import { graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Mural({ data: { muralImage } }) {
  console.log(muralImage);
  return (
    <div className="w-full h-screen relative z-50">
      <GatsbyImage image={getImage(muralImage)} alt="2022 Mural" className="" />
    </div>
  );
}

export const pageQuery = graphql`
  query MuralQuery {
    muralImage: file(relativePath: { eq: "bud-rozell-collage-terlingua.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
