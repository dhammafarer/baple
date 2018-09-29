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
            component: path.resolve('./src/templates/test-page.tsx'),
            context: {
              slug: node.fields.slug,
            }
          });
        });
      resolve();
    })
  });
}
