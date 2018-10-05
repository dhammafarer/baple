const siteMetadata = require('./src/data/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/logos/baple-group-logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'baple-group',
        short_name: 'baple',
        start_url: '/',
        background_color: '#336699',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/logos/baple-group-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-javascript-frontmatter',
  ],
}
