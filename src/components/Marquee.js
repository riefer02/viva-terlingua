import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Sponsors from 'components/Sponsors';

export default function Marquee({ marquee }) {
  const image = getImage(marquee.marqueeImage.childImageSharp);
  const activeSub = marquee.subhead ? true : false;

  const data = useStaticQuery(graphql`
    query LiftmasterLogoQuery {
      strapiSponsor(name: { eq: "Liftmaster" }) {
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <div className="marquee__section">
      <div className="marquee__container container mx-auto">
        <Sponsors />
        <GatsbyImage
          className="marquee__body shadow-lg "
          image={image}
          alt="Fun exciting scene from Terlingua"
          placeholder="blurred"
        ></GatsbyImage>
        <div className="marquee__text-area shadow-lg">
          <h1 className="marquee__header-primary">{marquee.title}</h1>
          {activeSub && (
            <h2 className="marquee__header-secondary">{marquee.subhead}</h2>
          )}
        </div>
        <div className="marquee__premiere-sponsor">
          <GatsbyImage
            image={getImage(data.strapiSponsor.logo)}
            alt="Liftmasters Logo"
            placeholder="blurred"
          ></GatsbyImage>
        </div>
        <div className="marquee__cookoff-dates">
          <div className="marquee__date-text">Nov 2nd-5th 2022</div>
        </div>
      </div>
    </div>
  );
}
