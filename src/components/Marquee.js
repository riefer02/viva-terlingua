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
    <div className="relative mx-auto max-w-7xl overflow-hidden text-center">
      <div className="flex flex-col">
        <div className="top-0 left-0 overflow-hidden w-full max-h-[356px]">
          <Sponsors />
          <GatsbyImage
            image={image}
            alt="Fun exciting scene from Terlingua"
            placeholder="blurred"
            className="w-full h-full"
          />
        </div>

        <div className=" bottom-0 lg:bottom-4 flex items-center justify-center w-full">
          <div className=" bg-gray-light-1 border-t-2 border-b-2 border-secondary py-4 xl:rounded-b-lg flex flex-col gap-2 w-full min-h-[70px] lg:min-h-[80px] shadow-lg mx-auto text-gray-dark justify-center items-center">
            <h1 className="text-3xl md:text-3xl lg:text-4xl max-w-sm sm:max-w-none lg:max-w-3xl leading-normal">
              {marquee.title}
            </h1>
            {activeSub && (
              <h2 className="text-xl lg:text-2xl">{marquee.subhead}</h2>
            )}
          </div>
        </div>

        <div className="hidden md:block absolute bottom-[-40px] lg:bottom-4 left-8 w-[160px]">
          <GatsbyImage
            image={getImage(
              data.strapiSponsor?.logo?.localFile?.childImageSharp
            )}
            alt="Liftmasters Logo"
            placeholder="blurred"
            className="h-full w-full"
          />
        </div>

        <div className="bg-primary-light -skew-x-12 text-white absolute bottom-[-40px] lg:bottom-4 md:right-4 lg:right-8 p-2 px-4 transform-skew hidden md:block">
          <div className="skew-x-12 text-sm">
            Oct 30th - Nov 2nd, {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
