/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
    siteMetadata: {
      title:'My Gatsby Site',
      author: 'Ced'
    },
    plugins : [
        'gatsby-plugin-sass',
        // 'gatsby-source-jahia',
        // {
        //   resolve: 'gatsby-source-modular-graphql',
        //   options: {
        //     path: './graphql',
        //     schemaModules:['jahia-schema']                
        //   },
        // },
        {
          resolve: "gatsby-source-graphql",
          options: {
            // This type will contain remote schema Query type
            typeName: "JAHIA",
            // This is the field under which it's accessible
            fieldName: "jahia",
            // URL to query from
            url: "http://localhost:8080/modules/graphql",
            headers: {
              'Authorization': `Bearer ${process.env.JAHIA_TOKEN}`
            },
            refetchInterval: 10,
          },
        },
    ]
};
