import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Marquee from 'components/Marquee';
import Layout from 'components/Layout';
import PanelImage from 'components/PanelImage';
import QuickNav from 'components/QuickNav';
import Spacer from 'components/Spacer';

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
      <Spacer />
      <div className="bg-tertiary-light max-w-4xl mx-auto p-2 lg:p-4 rounded-lg">
        <p className="text-xl leading-loose bg-gray-light-1 p-2 lg:p-4 rounded-lg text-left indent-8 font-primary">
          {message}
        </p>
      </div>
      <Spacer />
      <QuickNav />
      <div className="py-8"></div>
      <PanelImage image={getImage(panelImage)} />
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
