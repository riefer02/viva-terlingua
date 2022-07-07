import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Quote from 'components/Quote';
import TextDisplay from 'components/TextDisplay';
import PanelImage from 'components/PanelImage';

const AboutPage = ({ data }) => {
  const {
    strapiAboutPage: { title, quoteContent, marqueeImage, pageContent, meta },
  } = data;
  const image = getImage(marqueeImage);
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Seo
        title="About"
        keywords={[`about`, `history`, `terlingua`, `chili`, `cook`, 'off']}
        description={meta.description}
      />
      <Marquee marquee={marqueeData} />
      <Container>
        <TextDisplay texts={pageContent} />
        <Quote quote={quoteContent}></Quote>
        <PanelImage image={image} />
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
