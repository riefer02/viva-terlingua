import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Marquee from 'components/Marquee';
import Seo from 'components/SEO';
import PanelImage from 'components/PanelImage';
import TicketsForm from '../components/TicketsForm';
import Spacer from '../components/Spacer';

import '../utils/fontawesome';
import TicketsDetails from '../components/TicketsDetails';

const TicketsPage = ({ data }) => {
  const {
    strapiTicket: { title, marqueeImage, panelImage, meta },
  } = data;
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Seo
        title="Join the OTICCC: Original Terlingua International Chili Cook Off with the Wick Fowler and Frank X. Tolbert Chili Group - Get Your Tickets Now!"
        keywords={[`terlingua`, `chili`, `cook`, 'off', 'tickets']}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Spacer />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4">
        <TicketsDetails />
        <TicketsForm />
      </div>
      <Spacer />
      <PanelImage image={panelImage} />
      <Spacer />
    </Layout>
  );
};

export default TicketsPage;

export const pageQuery = graphql`
  query TicketsPageQuery {
    strapiTicket {
      meta {
        description
      }
      title
      id
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
