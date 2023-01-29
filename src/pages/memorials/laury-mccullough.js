import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';

export default function LauryMcCulloughPage({ data: { memorialImg } }) {
  return (
    <div>
      <Layout>
        <Seo
          title={'Champions and Winners of the 2022 Terlingua Chili Cook Off'}
          description={`Come see the champions and winners of the 2022 Terlingua International Chili Cook Off, the greatest chili cook off in Texas! Discover the winning teams and meet the talented chefs who brought them to life. Join us for a celebration of all things chili and an unforgettable taste of the Southwest. Don't miss out on this annual culinary event in Terlingua, Texas.`}
          keywords={[
            `terlingua`,
            `chili`,
            `cook off`,
            `tolbert`,
            `wick fowler`,
            `original`,
            'international',
            'winners',
            'champions',
            '2022',
          ]}
        />
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-tertiary shadow-md rounded-sm mb-10 md:mb-10 md:-skew-x-12 border-white border-2">
            <h1 className="underline md:no-underline py-4 md:py-0 md:skew-x-12">
              Laury McCullough
            </h1>
          </div>
          <div className="mb-10 shadow-md max-w-xl mx-auto border-white border-2">
            <GatsbyImage
              image={getImage(memorialImg.image)}
              alt="Laury McCullough"
            />
          </div>
          <div className="bg-tertiary p-10 shadow-md mb-10 text-left border-white border-2">
            <p className="text-3xl leading-loose mb-10 indent-10">
              It is with heavy hearts that we announce the passing of Laury
              McCullough on January 23, 2023. Laury was a beloved figure in the
              chili community, known for her passion and dedication to the
              craft.{' '}
            </p>

            <p className="text-3xl leading-loose mb-10 indent-10">
              She served as a reporter and communications director for CTTCG and
              later as Facebook and website manager for the organization. Laury
              was also a webmaster for OTICCC.{' '}
            </p>

            <p className="text-3xl leading-loose mb-10 indent-10">
              Her contributions to the chili world will not be forgotten and she
              will be deeply missed by her many friends in the community. Our
              thoughts and condolences go out to all who were close to Laury and
              knew her well. A full obituary will be shared in the coming days.
            </p>
            <p className="text-3xl leading-loose text-center">
              Rest in peace, Laury McCullough.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query LauryMcCulloughMemorialQuery {
    memorialImg: strapiGalleryImages(title: { eq: "Laury McCullough" }) {
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
