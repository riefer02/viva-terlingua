const path = require(`path`);

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
