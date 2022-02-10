import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import SEO from 'components/SEO';
import Marquee from 'components/Marquee';
import TextDisplay from 'components/TextDisplay';
import PanelImage from 'components/PanelImage';

const EventTemplate = ({ data }) => {
  const {
    strapiEvents: {
      title,
      description,
      startDateTime,
      endDateTime,
      marqueeImage,
      meta,
      panelImage,
    },
  } = data;
  const marqueeData = { title, marqueeImage };
  const panel = getImage(panelImage.childImageSharp);
  let eventTime;
  if (startDateTime && endDateTime) {
    eventTime = `${startDateTime} — ${endDateTime}`;
  }
  const pageContent = {
    primaryText: description,
    Links: [
      { type: 'internal', url: '/', label: 'Home' },
      { type: 'internal', url: '/music', label: 'Music' },
      { type: 'internal', url: '/local-attractions', label: 'Explore' },
    ],
    author: title,
    postDate: eventTime,
  };

  return (
    <Layout pageName="event">
      <SEO
        title={meta.title}
        keywords={[`${title}`, `event`, `beer`, `terlingua`, `chili`, `cook`]}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <TextDisplay texts={pageContent} />
        <PanelImage image={panel} />.
      </Container>
    </Layout>
  );
};

export default EventTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    strapiEvents(id: { eq: $id }) {
      meta {
        description
        title
      }
      created_at
      description
      endDateTime(formatString: "MMMM Do, YYYY")
      id
      title
      startDateTime(formatString: "MMMM Do, YYYY")
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      panelImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
