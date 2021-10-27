/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `notes`,
                path: `${__dirname}/src/notes/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`,
            },
        }
    ],
    siteMetadata: {
        title: 'John Callaghan & Maja Lorkowska',
        description: 'Everything you need to know about our special day'
    }
}
