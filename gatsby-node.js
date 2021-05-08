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
    }
  `);
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
