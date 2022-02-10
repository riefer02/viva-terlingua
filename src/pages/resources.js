import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Container from 'components/Container';
import SEO from 'components/SEO';
import Marquee from 'components/Marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

const ResourcesPage = ({ data }) => {
  const { allStrapiResources, strapiGalleryImages } = data;
  const resources = allStrapiResources.edges;
  const marqueeData = {
    title: 'Rules and Events',
    marqueeImage: strapiGalleryImages.image,
  };

  return (
    <Layout pageName="resources">
      <SEO
        title="Resources"
        keywords={[`resources`, `cookoff schedule`, `events`, `chili`]}
        description={
          'Download information regarding upcoming chili cook offs and rules and regulations for participation.'
        }
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <div className="resources">
          <div className="resources__content">
            <h1 className="resources__page-header">Resources</h1>
            <ul className="resources__list">
              {resources.map((resource, index) => {
                const { name, file } = resource.node;
                return (
                  <a
                    className="resources__item"
                    key={index}
                    href={file.publicURL}
                    download
                  >
                    <h4>{name}</h4>
                    <FontAwesomeIcon icon="download"></FontAwesomeIcon>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ResourcesPage;

export const pageQuery = graphql`
  query ResourcesPage {
    allStrapiResources {
      edges {
        node {
          name
          file {
            publicURL
          }
        }
      }
    }
    strapiGalleryImages(title: { eq: "Camp and Sky" }) {
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;
