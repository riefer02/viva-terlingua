import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Spacer from 'components/Spacer';

export default function BlogTemplate({ data }) {
  const {
    strapiBlog: {
      title,
      description,
      heroImage,
      bodyContent,
      tags,
      featuredPost,
    },
  } = data;

  const marqueeImage = heroImage.imageMedia;
  const marqueeData = { title, marqueeImage: marqueeImage };

  return (
    <Layout>
      <Seo
        title={title}
        keywords={[`${title}`, `event`, `beer`, `terlingua`, `chili`, `cook`]}
        description={description}
      />
      <Marquee marquee={marqueeData} />
      <Spacer />
      <div className="bg-tertiary-light rounded-lg p-2 max-w-3xl mx-auto">
        <div className="bg-white p-4 py-6 rounded-lg">
          {/* {description && <p className="mb-4">{description}</p>} */}

          <div className="flex flex-wrap">
            {tags.map(({ name }, index) => (
              <span
                key={index}
                className="inline-block bg-primary-light text-white py-1 px-3 rounded-full mr-2 mb-2"
              >
                {name}
              </span>
            ))}
          </div>
          <article className="prose lg:prose-lg">
            {bodyContent.map((content, index) => {
              // Render text content
              if (
                content.__typename ===
                  'STRAPI__COMPONENT_BLOG_COMPONENT_DYNAMIC_BLOG_CONTENT' &&
                content.textContent
              ) {
                return (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: content.textContent.data.childMarkdownRemark.html,
                    }}
                  />
                );
              }
              // Render image content
              if (content.imageContent && content.imageContent.imageMedia) {
                const imageData = getImage(
                  content.imageContent.imageMedia.localFile
                );
                return (
                  <div key={index}>
                    {imageData && (
                      <GatsbyImage
                        image={imageData}
                        alt={content.imageContent.imageAlt}
                      />
                    )}
                  </div>
                );
              }
              return null;
            })}
          </article>
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
      description
      featuredPost
      tags {
        name
        slug
      }
      heroImage {
        imageMedia {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        imageAlt
      }
      bodyContent {
        __typename
        ... on STRAPI__COMPONENT_BLOG_COMPONENT_DYNAMIC_BLOG_CONTENT {
          layoutType
          textContent {
            data {
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
          }
          imageContent {
            imageAlt
            imageMedia {
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`;
