const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'JavascriptFrontmatter') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'domain',
      value: getDomain(slug),
    });
    createNodeField({
      node,
      name: 'underConstruction',
      value: Boolean(node.frontmatter.underConstruction),
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allJavascriptFrontmatter {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
                underConstruction
              }
              frontmatter {
                layout
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allJavascriptFrontmatter.edges
        .filter(({ node }) => node.fileAbsolutePath.match(/\/pages\//))
        .forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/${node.fields.underConstruction ? "under-construction" : node.frontmatter.layout}.tsx`),
            context: {
              slug: node.fields.slug,
            }
          });
        });
      resolve();
    })
  });
}

function getDomain(slug) {
  const domains = [
    { name: 'plastics', pattern: /^\/plastics\// },
    { name: 'energy', pattern: /^\/energy\// },
    { name: 'engineering', pattern: /^\/engineering\// },
    { name: 'metalPackaging', pattern: /^\/metal-packaging\// },
    { name: 'group', pattern: '/' },
  ];

  return domains.find(d => slug.match(d.pattern)).name;
}

function getLayout(slug) {
  const layouts = [
    { layout: '/app-plastics/', pattern: /^\/plastics\// },
    { layout: '/app-energy/', pattern: /^\/energy\// },
    { layout: '/app-engineering/', pattern: /^\/engineering\// },
    { layout: '/app-metal-packaging/', pattern: /^\/metal-packaging\// },
    { layout: '/app/', pattern: '/' },
  ];

  return layouts.find(l => slug.match(l.pattern)).layout;
}
