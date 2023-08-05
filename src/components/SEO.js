import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

function Seo({ description, lang, keywords, title, article }) {
  const { pathname } = useLocation();
  const { site, ogImage, musicians } = useStaticQuery(query);

  const musiciansList = musicians?.nodes || [];

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

  let schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Original Terlingua International Championship Chili Cook-off',
    url: 'https://abowlofred.com',
    logo: 'https://abowlofred.com/static/343e93848bf82805b9e661cee3ceb578/fcb2f/open-graph-v2.jpg',
    description:
      "Original Terlingua International Championship Chili Cook-off, frequently referred to as the Tolbert's Cook Off, or Behind the Store, this is the original and Grand Daddy of all chili cook-offs - in the world! An outdoor festival where beer, sun, chili, and laughs flow freely. Over eight musical performances over four nights. Located near Big Bend National Park, Terlingua is the historic town that hosts the International Chili Cook Off once a year. The first cook-off in 1967, was created and promoted by Frank X. Tolbert. All Tolbert International Chili Cook Off proceeds go to local charities. In honor of the event co-founder Wick Fowler, Behind the Store's primary beneficiary is the ALS Association of Texas. ALS is commonly known as Lou Gehrig’s Disease. If you're looking for a getaway that inludes camping, exploration, beer, music, ghost towns, and excitement, located just a stone's throw from Alpine and Marfa, Texas, this is the chili festival destination for you.",
    foundingDate: '1967',
    founder: {
      '@type': 'Person',
      name: 'Frank X. Tolbert',
    },
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '22970 FM 170',
        addressLocality: 'Terlingua',
        addressRegion: 'TX',
        postalCode: '79852',
        addressCountry: 'USA',
      },
    },
    event: {
      '@type': 'Event',
      name: '56th Annual Original Terlingua International Championship Chili Cook-off',
      startDate: '2023-11-01',
      endDate: '2023-11-04',
      eventStatus: 'https://schema.org/EventScheduled', // Add event status
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', // Add event attendance mode
      location: {
        '@type': 'Place',
        name: 'Terlingua',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '22970 FM 170',
          addressLocality: 'Terlingua',
          addressRegion: 'TX',
          postalCode: '79852',
          addressCountry: 'USA',
        },
      },
      image:
        'https://abowlofred.com/static/343e93848bf82805b9e661cee3ceb578/fcb2f/open-graph-v2.jpg',
      description:
        'The original and Grand Daddy of all chili cook-offs - in the world! An outdoor festival where beer, sun, chili, and laughs flow freely. Over eight musical performances over four nights.',
      offers: {
        '@type': 'Offer',
        price: '53',
        priceCurrency: 'USD',
        url: 'https://abowlofred.com/tickets',
        availability: 'https://schema.org/InStock',
        validFrom: '2023-11-01',
      },
      organizer: {
        '@type': 'Organization',
        name: 'Original Terlingua International Championship Chili Cook-off',
        url: 'https://abowlofred.com',
      },
    },
  };

  if (musiciansList.length > 0) {
    schema.event.performer = musiciansList.map((musician) => ({
      '@type': 'PerformingGroup',
      name: musician.name,
    }));
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`%s | ${titleTemplate}`}
    >
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA4_ID}`}
      ></script>
      <script>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GATSBY_GA4_ID}');
  `}
      </script>

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
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
    musicians: allStrapiMusician(filter: { year: { eq: 2023 } }) {
      nodes {
        name
      }
    }
    ogImage: file(relativePath: { eq: "open-graph-v2.jpg" }) {
      childImageSharp {
        gatsbyImageData(formats: JPG)
      }
    }
  }
`;
