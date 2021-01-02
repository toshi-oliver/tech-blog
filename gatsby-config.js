module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: 'toshi-oliver',
        apis: [
          {
            endpoint: 'post',
          },
          {
            endpoint: 'category',
          },
        ],
      },
    },
  ],
};
