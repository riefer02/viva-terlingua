import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Container from "components/Container";
import SEO from "components/SEO";
import Marquee from "components/Marquee";
import Quote from "components/Quote";
import TextDisplay from "components/TextDisplay.js";

const AboutPage = ({ data }) => {
  const {
    strapiAboutPage: { title, quoteContent, marqueeImage, pageContent, meta },
  } = data;
  const image = getImage(marqueeImage);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout pageName="about">
      <SEO
        title="About"
        keywords={[`about`, `history`, `terlingua`, `chili`, `cook`, "off"]}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <TextDisplay texts={pageContent} />
        <Quote quote={quoteContent}></Quote>
        <GatsbyImage
          image={image}
          alt="A group of people at the chili cook off"
          className="image__full-panel rounded-lg my-16 shadow-md"
        />
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    strapiAboutPage {
      meta {
        description
      }
      marqueeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      title
      pageContent {
        Links {
          label
          url
          type
        }
        author
        postDate
        primaryText
      }
      quoteContent {
        text
        author
      }
    }
  }
`;
