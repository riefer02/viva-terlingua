require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Terlingua Chili Cook Off`,
    description: `Official Webstite for the Frank X. Tolbert Terlingua Chili Cook Off`,
    author: `riefer02 - Andrew Riefenstahl`,
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL || "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`sponsors`, `users`],
        singleTypes: [`home-page`],
        loginData: {
          identifier: process.env.STRAPI_IDENTIFIER,
          password: process.env.STRAPI_PASSWORD,
        },
      },
    },
  ],
};
