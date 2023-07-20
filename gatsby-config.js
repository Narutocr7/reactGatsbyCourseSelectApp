/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.development`,
})
console.log(process.env)
module.exports = {
  siteMetadata: {
    title: `CourseSelect Ecommerce project`,
    description: `Website where you can buy courses.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [`gatsby-plugin-sharp`,`gatsby-plugin-image`,`gatsby-transformer-sharp`,{
    resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
  },
},
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    // Learn about environment variables: https://gatsby.dev/env-vars
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
},
{
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.SNIPCART_KEY,
        autopop: true,
			}
		},
],
}
