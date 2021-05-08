import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
// import Checkout from "components/Checkout";
import SEO from "components/SEO";
// import Marquee from "components/Marquee";
// import Quote from "components/Quote";
// import CardGallery from "components/CardGallery";
// import Feature from "components/Feature";

const EventTemplate = ({ data }) => {
  const {
    strapiEvents: { title, description, startDateTime, endDateTime },
  } = data;
  // const image = getImage(marqueeImage);
  // const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="event">
      <SEO title="Home" keywords={[`terlingua`, `chili`, `cook`, "off"]} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* <Marquee marquee={marqueeData} /> */}
      <Container>
        <h1>{title}</h1>
        <h3>Start Time: {startDateTime}</h3>
        <h3>End Time: {endDateTime}</h3>
        <p>{description}</p>
      </Container>
    </Layout>
  );
};

export default EventTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    strapiEvents(id: { eq: $id }) {
      created_at
      description
      endDateTime
      id
      title
      startDateTime
      marqueeImage
    }
  }
`;
