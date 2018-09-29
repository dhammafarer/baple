const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'JavascriptFrontmatter') {
    const fileNode = getNode(node.parent);
    console.log(createFilePath({ node, getNode, basePath: 'pages' }));
  }
}
