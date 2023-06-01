import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Marquee from 'components/Marquee';
import Layout from 'components/Layout';
import Container from 'components/Container';
import PanelImage from 'components/PanelImage';
import QuickNav from 'components/QuickNav';

const ThankYouPage = ({ data }) => {
  const {
    strapiThankYou: { title, marqueeImage, message, panelImage },
  } = data;
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Helmet>
        <title>Thank you</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <div className="bg-tertiary max-w-7xl mx-auto p-4">
          <p className="thank-you__message bg-white p-2">{message}</p>
        </div>
        <QuickNav />
        <PanelImage image={getImage(panelImage)} />
      </Container>
    </Layout>
  );
};

export default ThankYouPage;

export const pageQuery = graphql`
  query ThankYouQuery {
    strapiThankYou {
      title
      id
      message
      marqueeImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      panelImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
