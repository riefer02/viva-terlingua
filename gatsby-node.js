const path = require(`path`);

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
