require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Terlingua International Chili Cook Off`,
    titleTemplate: `Terlingua International Chili Cook Off`,
    description: `Official Website for the Wick Fowler, Frank X. Tolbert, Terlingua International Chili Cook Off - Behind the store.`,
    siteUrl: `https://terlinguachilicookoff.org`,
    url: `${
      process.env.NODE_ENV === 'development'
        ? `http://localhost:8000`
        : `https://terlinguachilicookoff.org`
    }`,
    image: `/static/oticcc-logo-black.png`,
    author: `@riefer02 - Andrew Riefenstahl`,
    twitter: `@riefer02`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    `gatsby-plugin-fontawesome-css`,
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
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['STRIPE_API_KEY', 'NODE_ENV', 'DOMAIN_URL', 'TICKET_PRICE'],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          'sponsors',
          'users',
          'ticket-holders',
          'events',
          'musicians',
          'local-attractions',
          'gallery-images',
          'resources',
          'cook-offs',
        ],
        singleTypes: ['home-page', 'tickets', 'thank-you', 'about-page'],
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    'gatsby-plugin-postcss',
  ],
};
