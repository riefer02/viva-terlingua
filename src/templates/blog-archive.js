import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Spacer from 'components/Spacer';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';

const ArchivePage = ({ data, pageContext }) => {
  const { allStrapiBlog } = data;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/blogs' : `/blogs/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;

  return (
    <Layout>
      <Seo title="Blog Archive" />
      <SectionTitle title="Blog Archive" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allStrapiBlog.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
      <div className="pagination">
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </div>
      <Spacer />
    </Layout>
  );
};

export default ArchivePage;

export const pageQuery = graphql`
  query ArchivePageQuery($skip: Int!, $limit: Int!) {
    allStrapiBlog(sort: { publishedAt: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          description
          publishedAt
          tags {
            name
          }
          heroImage {
            imageAlt
            imageMedia {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;
