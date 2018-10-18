module.exports = {
  siteMetadata: {
    title: 'NeighborHealth',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/doctors`,
        name: 'doctors'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/videos`,
        name: 'videos'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/faq`,
        name: 'faqs'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127210081-1",
        head: true,
      },
    },
  ],
}
