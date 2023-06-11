import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';
import Spacer from 'components/Spacer';

const ResourcesPage = ({ data }) => {
  const { allStrapiResource, strapiGalleryImage } = data;
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
      <div className="w-full min-h-[260px] px-8">
        <div className="shadow-md mx-auto bg-gray-100 max-w-[470px] lg:max-w-[660px] py-4 rounded-lg">
          <h1 className="text-2xl">Resources</h1>
          <ul className="flex flex-col py-8 px-4 gap-2">
            {resources.map((resource, index) => {
              const { name, file } = resource.node;
              if (!file) return;
              
              return (
                <a
                  className="bg-tertiary border-dark-grey text-lg lg:text-xl rounded-lg flex justify-between items-center px-4 py-2 transition-all ease-in cursor-pointer text-dark-grey hover:bg-secondary hover:text-gray-light-1"
                  key={index}
                  href={file.localFile.publicURL}
                  download
                >
                  <h4>{name}</h4>
                  <FontAwesomeIcon
                    className="text-xl ml-2"
                    icon="download"
                  ></FontAwesomeIcon>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
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
  }
`;
