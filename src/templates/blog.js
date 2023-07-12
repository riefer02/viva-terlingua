import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Spacer from 'components/Spacer';

export default function BlogTemplate({ data }) {
  const {
    strapiBlog: { title, body, heroImage },
  } = data;
  const marqueeImage = heroImage;
  const marqueeData = { title, marqueeImage };

  return (
    <Layout>
      <Seo
        title={title}
        keywords={[`${title}`, `event`, `beer`, `terlingua`, `chili`, `cook`]}
        description={title}
      />
      <Marquee marquee={marqueeData} />
      <Spacer />
      <div className="bg-tertiary-light rounded-lg p-2 max-w-3xl mx-auto">
        <div className="bg-white p-4 py-6 rounded-lg">
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{
              __html: body.data.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>

      <Spacer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogTemplateQuery($id: String!) {
    strapiBlog(id: { eq: $id }) {
      title
      body {
        data {
          body
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
      heroImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
