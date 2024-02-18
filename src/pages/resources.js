import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';
import Spacer from 'components/Spacer';
import ImageGallery from 'components/ImageGallery';

const ResourcesPage = ({ data }) => {
  const { allStrapiResource, strapiGalleryImage, posters } = data;
  const resources = allStrapiResource.edges;
  const marqueeData = {
    title: 'Rules and Events',
    marqueeImage: strapiGalleryImage.image,
  };

  return (
    <Layout>
      <Seo
        title="Resources, Rules, and Cook Off Events"
        keywords={[
          `resources`,
          `cookoff`,
          `events`,
          `chili`,
          `rules`,
          `regulations`,
          `schedule`,
        ]}
        description={
          'Download information and resources regarding upcoming chili cook offs, rules and regulations for participation. Viva Terlingua!'
        }
      />
      {marqueeData.marqueeImage && <Marquee marquee={marqueeData} />}
      <Spacer />
      <div className="w-full min-h-[260px] px-2">
        <div className="shadow-md mx-auto bg-gray-100 max-w-[470px] lg:max-w-[660px] py-4 rounded-lg">
          <h1 className="text-2xl text-center">Resources</h1>
          <ul className="flex flex-col py-8 px-2 gap-2">
            {resources.map((resource, index) => {
              const { name, file } = resource.node;
              if (!file) return null; // Skip rendering if no file is present

              return (
                <li
                  key={index}
                  className="bg-tertiary border-dark-grey rounded-lg flex justify-between gap-2 items-center px-4 py-2 text-dark-grey mb-2"
                >
                  <h4 className="text-lg lg:text-xl flex-grow line-clamp-1">
                    {name}
                  </h4>
                  <div className="flex items-center justify-end">
                    <a
                      href={file.localFile.publicURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-secondary hover:text-gray-light-1 transition-all ease-in cursor-pointer rounded-lg flex items-center justify-center p-2 mr-1 md:mr-2 lg:mr-4"
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="eye"
                        title="View"
                      ></FontAwesomeIcon>
                    </a>
                    <a
                      href={file.localFile.publicURL}
                      download
                      className="hover:bg-secondary hover:text-gray-light-1 transition-all ease-in cursor-pointer rounded-lg flex items-center justify-center p-2"
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="download"
                        title="Download"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Spacer />
      <ImageGallery images={posters} />
      <Spacer />
    </Layout>
  );
};

export default ResourcesPage;

export const pageQuery = graphql`
  query ResourcesPage {
    allStrapiResource {
      edges {
        node {
          name
          file {
            localFile {
              publicURL
            }
          }
        }
      }
    }
    strapiGalleryImage(title: { eq: "Camp and Sky" }) {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    posters: allStrapiGalleryImage(
      filter: { role: { eq: "poster" } }
      sort: { title: ASC }
    ) {
      edges {
        node {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
