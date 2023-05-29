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
          title={'In Loving Memory of Laury McCullough - January 23, 2023'}
          description={`A dedicated page in honor of Laury McCullough, a beloved member of the chili community who passed away on January 23, 2023. Read more about her life and contributions to the chili world. Condolences to all who knew her.`}
          keywords={[
            `terlingua`,
            `chili`,
            `cook off`,
            `tolbert`,
            `wick fowler`,
            `original`,
            'international',
            '2022',
            'obituary',
            'memorial',
            'epitaph',
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
