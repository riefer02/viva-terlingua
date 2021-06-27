require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Terlingua International Chili Cook Off`,
    titleTemplate: `Terlingua International Chili Cook Off`,
    description: `Official Website for the Wick Fowler, Frank X. Tolbert, Terlingua International Chili Cook Off - Behind the store.`,
    url: `${
      process.env.NODE_ENV === "development"
        ? `http://localhost:8000`
        : `terlinguachilicookoff.org`
    }`,
    image: `/static/hillside-journey.jpg`,
    author: `@riefer02 - Andrew Riefenstahl`,
    twitter: `@riefer02`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
        allowList: ["STRIPE_API_KEY", "NODE_ENV"],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `sponsors`,
          `users`,
          `quotes`,
          `events`,
          `musicians`,
          `local-attractions`,
        ],
        singleTypes: [`home-page`, `tickets`, "thank-you", "about-page"],
      },
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
  ],
};
