import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Marquee from 'components/Marquee';
import Layout from 'components/Layout';
import Container from 'components/Container';
import PanelImage from 'components/PanelImage';
import QuickNav from 'components/QuickNav';
import axios from 'axios';

function getLastName(name) {
  var n = name.trim().split(' ');
  return n[n.length - 1];
}

function getFirstName(name) {
  var n = name.trim().split(' ');
  return n[0];
}

const ThankYouPage = ({ data }) => {
  const {
    strapiThankYou: { title, marqueeImage, message, panelImage },
  } = data;
  const marqueeData = { title, marqueeImage };

  useEffect(() => {
    async function sortTicketHoldersByLastName() {
      return await axios.get(process.env.RESOURCE_API).then((res) => {
        let ticketHolders = res.data;
        ticketHolders.forEach((i) => {
          i.lastName = getLastName(i.name);
          i.firstName = getFirstName(i.name);
        });

        ticketHolders = ticketHolders.sort(function (a, b) {
          if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
            return -1;
          }
          if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        // console.log(ticketHolders);

        // console.log(JSON.stringify(ticketHolders));
      });
    }
    sortTicketHoldersByLastName();
  }, []);

  return (
    <Layout pageName="two">
      <Helmet>
        <title>Thank you</title>
      </Helmet>
      <Marquee marquee={marqueeData} />
      <Container>
        <h1 className="thank-you__message">{message}</h1>
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
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      panelImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
