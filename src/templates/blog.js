import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import BlogHero from '../components/BlogHero';
import BlogLayout from '../components/BlogLayout';
import BlogContentRenderer from '../components/BlogContentRenderer';

export default function BlogTemplate({ data }) {
  const {
    strapiBlog: { title, description, heroImage, bodyContent, tags },
  } = data;

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        keywords={[`${title}`, `event`, `beer`, `terlingua`, `chili`, `cook`]}
      />
      <BlogLayout>
        <BlogHero title={title} image={heroImage.imageMedia} />
        <div className="rounded-lg py-2 mx-auto">
          <div className="p-2 py-6">
            <div className="flex flex-wrap mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary-light text-white py-1 px-3 rounded-full mr-2 mb-2"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <article className="prose-sm sm:prose md:prose-md lg:prose-lg">
              {bodyContent.map((content, index) => (
                <BlogContentRenderer key={index} content={content} />
              ))}
            </article>
          </div>
        </div>
      </BlogLayout>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogTemplateQuery($id: String!) {
    strapiBlog(id: { eq: $id }) {
      title
      description
      tags {
        name
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
              }
            }
          }
          imageContent {
            imageAlt
            imageMedia {
              localFile {
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
