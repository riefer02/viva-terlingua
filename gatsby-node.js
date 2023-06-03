const { data } = require('autoprefixer');
const path = require(`path`);
const fs = require('fs');

// const { zipFunctions } = require('@netlify/zip-it-and-ship-it');

// exports.onPostBuild = () => {
//   const srcLocation = path.join(__dirname, `./netlify/functions`);
//   const outputLocation = path.join(__dirname, `./public/functions`);
//   if (!fs.existsSync(outputLocation)) {
//     fs.mkdirSync(outputLocation);
//   }
//   console.log('Building a better tomorrow.')
//   return zipFunctions(srcLocation, outputLocation);
// };

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query CreatePagesQuery {
      allStrapiEvent {
        edges {
          node {
            slug
            id
          }
        }
      }
      allStrapiMusician {
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
  data.allStrapiMusician.edges.forEach((edge) => {
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

  //   Create Individual Event Page
  data.allStrapiEvent.edges.forEach((edge) => {
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
