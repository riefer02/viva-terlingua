const { data } = require('autoprefixer');
const path = require(`path`);
const fs = require('fs');

const { zipFunctions } = require('@netlify/zip-it-and-ship-it');
exports.onPostBuild = () => {
  const srcLocation = path.join(__dirname, `./functions`);
  const outputLocation = path.join(__dirname, `./public/functions`);
  if (!fs.existsSync(outputLocation)) {
    fs.mkdirSync(outputLocation);
  }
  return zipFunctions(srcLocation, outputLocation);
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      allStrapiEvents {
        edges {
          node {
            slug
            id
          }
        }
      }
      allStrapiMusicians {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  // Create Individual Musician Page
  data.allStrapiMusicians.edges.forEach((edge) => {
    const { slug, id } = edge.node;
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/musician.js`),
      context: {
        id: id,
        slug: slug,
      },
    });
  });

  // Create Individual Event Page
  data.allStrapiEvents.edges.forEach((edge) => {
    const { slug, id } = edge.node;
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/event.js`),
      context: {
        id: id,
        slug: slug,
      },
    });
  });
};
