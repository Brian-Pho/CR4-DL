module.exports = {
  pathPrefix: `/CR4-DL`,
  siteMetadata: {
    title: `CR4-DL`,
    description: `The Cradle. A vault for notes on artificial intelligence and the brain.`,
    author: {
      name: `Brian Pho`,
      github: `Brian-Pho`,
    },
    siteUrl: `https://brianpho.com/CR4-DL/`,
    menu: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Notes",
        path: "/notes/",
      },
      {
        label: "Timeline",
        path: "/timeline/",
      },
      {
        label: "About",
        path: "/about/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: false,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CR4-DL`,
        short_name: `CR4-DL`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#677B8C`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Arima Madurai`,
            file: `https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
