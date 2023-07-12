import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Sponsors from 'components/Sponsors';

export default function Marquee({ marquee }) {
  const image = getImage(marquee.marqueeImage?.localFile.childImageSharp);
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
    <div className="relative mx-auto h-[172px] sm:h-[200px] md:h-[280px] lg:h-[415px] max-w-7xl rounded-lg overflow-hidden text-center">
      <div className="">
        <div className="absolute top-0 left-0 sm:h-[85%] overflow-hidden rounded-lg w-full">
          <Sponsors />
          <GatsbyImage
            image={image}
            alt="Fun exciting scene from Terlingua"
            placeholder="blurred"
            className="w-full h-full max-h-[140px] md:max-h-[unset]"
          />
        </div>

        <div className="absolute bottom-0 lg:bottom-4 flex items-center justify-center w-full">
          <div className="bg-secondary-dark max-w-xl lg:max-w-3xl w-full px-4 py-2 pb-4 min-h-[70px] lg:min-h-[80px] shadow-lg mx-auto text-gray-light-1 flex flex-col justify-center items-center clip-marquee">
            <h1 className="md:text-xl lg:text-2xl">{marquee.title}</h1>
            {activeSub && (
              <h2 className="text-xs md:text-base lg:text-lg">
                {marquee.subhead}
              </h2>
            )}
          </div>
        </div>

        <div className="hidden md:block absolute bottom-[-40px] lg:bottom-0 left-8 w-[160px]">
          <GatsbyImage
            image={getImage(data.strapiSponsor?.logo?.localFile)}
            alt="Liftmasters Logo"
            placeholder="blurred"
            className="h-full w-full"
          />
        </div>

        <div className="bg-primary-light -skew-x-12 text-white absolute bottom-[-40px] lg:bottom-0 md:right-4 lg:right-8 p-2 px-4 transform-skew hidden md:block">
          <div className="skew-x-12 text-sm">
            Nov 1st-4th {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
