const { data } = require('autoprefixer');
const path = require(`path`);
const util = require('util');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);

exports.onPostBuild = async (gatsbyNodeHelpers) => {
  const { reporter } = gatsbyNodeHelpers;

  const reportOut = (report) => {
    const { stderr, stdout } = report;
    if (stderr) reporter.error(stderr);
    if (stdout) reporter.info(stdout);
  };

  // NOTE: the gatsby build process automatically copies /static/functions to /public/functions
  // If you use yarn, replace "npm install" with "yarn install"
  reportOut(await exec('cd ./public/functions && npm install'));
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
