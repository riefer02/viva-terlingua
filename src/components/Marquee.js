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
    <div className="relative mx-auto h-[200px] md:h-[280px] lg:h-[415px] max-w-7xl rounded-lg">
      <div className="">
        <div className="absolute top-0 left-0 h-[85%] overflow-hidden rounded-lg">
          <Sponsors />
          <GatsbyImage
            image={image}
            alt="Fun exciting scene from Terlingua"
            placeholder="blurred"
            className="w-full h-full"
          />
        </div>

        <div className="bg-secondary-dark absolute bottom-0 lg:bottom-4 lg:left-[25%] min-h-[60px] md:min-h-[90px] shadow-lg mx-auto text-gray-light-1 md:pt-4 pb-2 md:pb-6 md:px-12 w-full lg:w-1/2 flex flex-col justify-center items-center clip-marquee">
          <h1 className="md:text-xl lg:text-2xl">{marquee.title}</h1>
          {activeSub && (
            <h2 className="text-xs md:text-lg lg:text-xl">{marquee.subhead}</h2>
          )}
        </div>

        <div className="hidden md:block absolute bottom-0 left-8 w-36 bg-primary-light h-12">
          <GatsbyImage
            image={getImage(data.strapiSponsor.logo)}
            alt="Liftmasters Logo"
            placeholder="blurred"
            className="h-full w-full"
          />
        </div>

        <div className="bg-primary-light -skew-x-12 text-white absolute bottom-0 md:right-4 lg:right-8 p-2 transform-skew min-w-[200px] hidden md:block">
          <div className="skew-x-12 text-sm lg:text-base">
            Nov 2nd-5th {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
