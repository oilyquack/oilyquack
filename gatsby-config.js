/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/oilyquack',
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-react-helmet`],
  siteMetadata: {
    author: "Ollie Crook",
    description:
      "I’m a software developer who enjoys creating accessible web experiences, working with awesome teams and using great technology and design principles to empower users and colleagues",
    siteUrl: "http://oilyquack.com",
    title: "Ollie Crook | Software Developer & Malapropism",
  },
};
