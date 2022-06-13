module.exports = {
  siteMetadata: {
    title: `test2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/images`,
      },
    },
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
     `gatsby-transformer-sharp`,
     {
       resolve: `gatsby-plugin-sharp`,
       options: {
         defaults: {
           placeholder: `none`,
           backgroundColor: `transparent`,
         },
       },
     },
     `gatsby-plugin-image`,
     {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tio | Make your business tio-powered`,
        short_name: `tio.ist`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
