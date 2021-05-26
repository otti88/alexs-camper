module.exports = {
  pathPrefix: `/alexs-camper`,
  siteMetadata: {
    title: "alexs-camper",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
