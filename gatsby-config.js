require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Original Terlingua International Championship Chili Cook-off`,
    titleTemplate: `Original Terlingua International Championship Chili Cook-off`,
    description: `Official Website for the Wick Fowler, Frank X. Tolbert, Terlingua International Chili Cook Off - Behind the store.`,
    siteUrl: `https://abowlofred.com`,
    url: `${
      process.env.NODE_ENV === 'development'
        ? `http://localhost:8000`
        : `https://abowlofred.com`
    }`,
    image: `/static/oticcc-logo-black.png`,
    author: `@riefer02 - Andrew Riefenstahl`,
    twitter: `@riefer02`,
  },
  trailingSlash: `never`,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          formats: [`avif`, `webp`, `auto`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
        // Set to false to allow builds to continue on image errors
        failOnError: true,
      },
    },
    // `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Terlingua International Chili Cook Off`,
        short_name: `Terlingua International Chili Cook Off`,
        description: `Official Website for the Wick Fowler, Frank X. Tolbert, Terlingua International Chili Cook Off - Behind the store.`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#ec6d5c`,
        display: `standalone`,
        icon: `src/assets/images/chili-pepper.svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['STRIPE_API_KEY', 'NODE_ENV', 'DOMAIN_URL', 'TICKET_PRICE'],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        accessToken: process.env.STRAPI_API_TOKEN,
        queryLimit: 1000, // Default to 100
        collectionTypes: [
          {
            singularName: 'blog',
            queryParams: {
              populate: 'deep',
            },
          },
          'sponsor',
          {
            singularName: 'event',
            queryParams: {
              populate: 'deep',
            },
          },
          {
            singularName: 'faq',
            queryParams: {
              populate: 'deep',
            },
          },
          {
            singularName: 'musician',
            queryParams: {
              populate: 'deep',
            },
          },
          'local-attraction',
          'gallery-image',
          {
            singularName: 'resource',
            queryParams: {
              populate: 'deep',
            },
          },
          {
            singularName: 'winner',
            queryParams: {
              populate: 'deep',
            },
          },
        ],
        singleTypes: [
          {
            singularName: 'home-page',
            queryParams: {
              populate: 'deep',
            },
          },
          {
            singularName: 'about-page',
            queryParams: {
              populate: 'deep',
            },
          },
          {
            singularName: 'thank-you',
            queryParams: {
              populate: 'deep',
            },
          },
          {
            singularName: 'ticket',
            queryParams: {
              populate: 'deep',
            },
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
  ],
};
