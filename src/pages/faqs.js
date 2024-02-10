import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Marquee from 'components/Marquee';
import Spacer from 'components/Spacer';
import SectionTitle from '../components/SectionTitle';
import Accordion from '../components/Accordion';

const FAQPage = ({ data }) => {
  const {
    strapiHomePage: { marqueeImage },
  } = data;

  const marqueeData = {
    title: 'Frequently Asked Questions',
    marqueeImage,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.allStrapiFaq.edges.map(({ node }) => ({
      '@type': 'Question',
      name: node.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: node.answer,
      },
    })),
  };

  const faqsByCategory = data.allStrapiFaq.edges.reduce((acc, { node }) => {
    const { category, answer, question, order } = node;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ answer, question, order });
    return acc;
  }, {});

  Object.keys(faqsByCategory).forEach((category) => {
    faqsByCategory[category].sort((a, b) => a.order - b.order);
  });

  return (
    <Layout>
      <Seo
        title={'FAQ'}
        schemaMarkup={structuredData}
        description={'Frequently Asked Questions'}
      />
      <Marquee marquee={marqueeData} />
      <Spacer />
      {Object.entries(faqsByCategory).map(([category, faqs], index) => (
        <section key={index}>
          <SectionTitle title={category} />
          {faqs.map((faq, faqIndex) => (
            <Accordion
              key={faqIndex}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
          <Spacer />
        </section>
      ))}
    </Layout>
  );
};

export default FAQPage;

export const pageQuery = graphql`
  query FAQPageQuery {
    strapiHomePage {
      marqueeImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allStrapiFaq {
      edges {
        node {
          answer
          category
          question
          order
        }
      }
    }
  }
`;
