import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import TextDisplay from "components/TextDisplay";

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
  const pageContent = {
    primaryText: description,
    Links: [{ type: "internal", url: "/", label: "Home" }],
    author: title,
    postDate: `${startDate} — ${endDateTime}`,
  };

  return (
    <Layout pageName="event">
      <SEO
        title="Home"
        keywords={[`${title}`, `event`, `beer`, `terlingua`, `chili`, `cook`]}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <TextDisplay texts={pageContent} />
        <GatsbyImage
          image={getImage(marqueeImage)}
          alt="Hillside Journey!"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
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
