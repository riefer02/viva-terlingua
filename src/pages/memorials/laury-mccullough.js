import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';

export default function LauryMcCulloughPage({ data: { memorialImg } }) {
  const textStyles = 'text-xl leading-loose indent-10';

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
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-secondary py-4 shadow-md rounded-sm mb-10 md:mb-10 md:-skew-x-12 border-gray-light-1 border-2 max-w-5xl">
            <h1 className="underline md:no-underline py-4 md:py-0 md:skew-x-12 inline-block text-2xl text-gray-light-1">
              Laury McCullough
            </h1>
          </div>
          <div className="mb-10 shadow-md max-w-xl mx-auto border-gray-light-1 border-2 rounded-lg">
            <GatsbyImage
              image={getImage(memorialImg?.image.localFile)}
              alt="Laury McCullough"
              className="rounded-lg"
            />
          </div>
          <div className="bg-gray-light-1 p-10 shadow-md mb-10 text-left rounded-lg border-2 max-w-5xl mx-auto flex flex-col gap-6">
            <p className={textStyles}>
              It is with heavy hearts that we announce the passing of Laury
              McCullough on January 23, 2023. Laury was a beloved figure in the
              chili community, known for her passion and dedication to the
              craft.{' '}
            </p>

            <p className={textStyles}>
              She served as a reporter and communications director for CTTCG and
              later as Facebook and website manager for the organization. Laury
              was also a webmaster for OTICCC.{' '}
            </p>

            <p className={textStyles}>
              Her contributions to the chili world will not be forgotten and she
              will be deeply missed by her many friends in the community. Our
              thoughts and condolences go out to all who were close to Laury and
              knew her well. A full obituary will be shared in the coming days.
            </p>
            <p className="text-lg md:text-2xl leading-loose text-center">
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
    memorialImg: strapiGalleryImage(title: { eq: "Laury McCullough" }) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
