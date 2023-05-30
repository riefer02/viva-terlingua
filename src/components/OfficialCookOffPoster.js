import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function OfficialCookOffPoster({ className }) {
  const { officialCookOffPoster } = useStaticQuery(graphql`
    query OfficialPosterQuery {
      officialCookOffPoster: strapiGalleryImage(
        title: { eq: "Official Cook Off Poster" }
      ) {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 880)
            }
          }
        }
      }
    }
  `);

  return (
    <div className={`p-10 ${className}`}>
      <GatsbyImage
        image={getImage(officialCookOffPoster.image)}
        alt="The Official Cook Off Poster"
        className="shadow-md"
      />
      <p className="text-3xl lg:text-2xl mt-16">
        Poster by: <span className="text-primary">Steve Gaconnier</span> from
        Denison, TX and was created using linoleum prints.
      </p>
    </div>
  );
}
