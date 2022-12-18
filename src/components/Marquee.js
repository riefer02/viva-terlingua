import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Sponsors from 'components/Sponsors';

export default function Marquee({ marquee }) {
  const image = getImage(marquee.marqueeImage.childImageSharp);
  const activeSub = marquee.subhead ? true : false;

  const data = useStaticQuery(graphql`
    query LiftmasterLogoQuery {
      strapiSponsors(name: { eq: "Liftmaster" }) {
        logo {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <div className="flex flex-col relative overflow-hidden lg:h-[43rem] container mx-auto mb-10">
      <Sponsors />
      <GatsbyImage
        className="h-[14vh] sm:h-[200px] md:h-[411px] mb-[-1px] sm:mb-0 overflow-hidden shadow-lg"
        image={image}
        alt="Fun exciting scene from Terlingua"
        placeholder="blurred"
      />
      <div className="bg-secondary-dark top-[-12%] left-0 inline-block relative shadow-lg mx-auto mb-[4rem] lg:mb-0 text-white py-[1rem] px-[3rem] w-full lg:w-1/2 clip-marquee">
        <h1 className="marquee__header-primary">{marquee.title}</h1>
        {activeSub && (
          <h2 className="marquee__header-secondary">{marquee.subhead}</h2>
        )}
      </div>
      <div className="marquee__premiere-sponsor">
        <GatsbyImage
          image={getImage(data.strapiSponsors.logo)}
          alt="Liftmasters Logo"
          placeholder="blurred"
        />
      </div>
      <div className="marquee__cookoff-dates">
        <div className="marquee__date-text">Nov 2nd-5th 2022</div>
      </div>
    </div>
  );
}
