import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Marquee from 'components/Marquee';
import Seo from 'components/SEO';
import PanelImage from 'components/PanelImage';
import TicketsForm from '../components/molecules/TicketsForm';
import Spacer from '../components/atoms/Spacer';

import '../utils/fontawesome';
import TicketsDetails from '../components/molecules/TicketsDetails';

const TicketsPage = ({}) => {
  // const {
  //   strapiTicket: { title, marqueeImage, panelImage, meta },
  // } = data;
  // const image = getImage(panelImage);
  // const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      {/* <Seo
        title="Tickets"
        keywords={[`terlingua`, `chili`, `cook`, 'off', 'tickets']}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <div className="flex flex-col lg:flex-row">
          <TicketsDetails />
          <TicketsForm />
        </div>
        <Spacer />
        <PanelImage image={image} />
      </Container> */}
    </Layout>
  );
};

export default TicketsPage;

// export const pageQuery = graphql`
//   query TicketsQuery {
//     strapiTicket {
//       meta {
//         description
//       }
//       title
//       id
//       marqueeImage {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//         }
//       }
//       panelImage {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//         }
//       }
//     }
//   }
// `;
