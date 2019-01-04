const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Drover Marketing Site',
    description: 'Drover Marketing Site',
    author: 'Drover',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-svg',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Montserrat\:400,700`, 'Raleway'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-source-shopify',
    //   options: {
    //     shopName: 'DroverTest',
    //     // This is allowed to be public
    //     accessToken: 'c38965a0834266752e49b47724858845',
    //     verbose: true,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
