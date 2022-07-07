import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

function Seo({ description, lang, keywords, title, article }) {
  const { pathname } = useLocation();
  const { site, ogImage } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata;

  const seoImage = getImage(ogImage);

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: seoImage.images.fallback.src,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`%s | ${titleTemplate}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content={seo.image} />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  article: false,
  author: `riefer02`,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Seo;

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername: twitter
      }
    }
    ogImage: file(relativePath: { eq: "oticcc-logo-white.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, pngOptions: { quality: 50 })
      }
    }
  }
`;
