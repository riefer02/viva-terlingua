import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";

const EventTemplate = ({ data }) => {
  const {
    strapiEvents: {
      title,
      description,
      startDateTime,
      endDateTime,
      marqueeImage,
      meta,
    },
  } = data;
  const marqueeData = { title, marqueeImage };

  let startDate = startDateTime.toString();
  const startDay = new Date(startDate);

  return (
    <Layout pageName="event">
      <SEO
        title="Home"
        keywords={[`${title}`, `event`, `beer`, `terlingua`, `chili`, `cook`]}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <h1>{title}</h1>
        <div>
          <h3>Start Time: {startDate}</h3>
          <h3>End Time: {endDateTime}</h3>
        </div>
        <p class="p-lead">{description}</p>
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
      }
      created_at
      description
      endDateTime
      id
      title
      startDateTime
      marqueeImage {
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
