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
      path: `/blog/${slugify(title)}`,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        id: id,
        slug: slugify(title),
      },
    });
  });

  // Create Blog Archive Pages
  const posts = data.allStrapiBlog.edges;
  const postsPerPage = 8;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve(`./src/templates/blog-archive.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
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
