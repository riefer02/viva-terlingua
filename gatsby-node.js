const path = require(`path`);

function slugify(text) {
  return text
    .toString()
    .normalize('NFD') // Normalize diacritics
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

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
      allStrapiBlog {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `);

  // Create Individual Blog Page
  data.allStrapiBlog.edges.forEach((edge) => {
    const { title, id } = edge.node;
    actions.createPage({
      path: slugify(title),
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        id: id,
        slug: slugify(title),
      },
    });
  });

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
