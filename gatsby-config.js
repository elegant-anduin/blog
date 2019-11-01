module.exports = {
  siteMetadata: {
    title: `Lukonez`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`pacifico:400`, `raleway:100,400,600,700`, "lato: 300,400,500"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/static/assets`,
              name: 'images',
          },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
   
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 925,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-47904062-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lukonez",
        short_name: "Lukonez",
        start_url: "/",
        background_color: "#292929",
        theme_color: "#405375",
        display: "minimal-ui"
      }
    },
    // {
    //   resolve: "gatsby-plugin-sentry",
    //   options: {
    //     dsn: "https://23d8e0b792d442d29d0b4344a79ef87d@sentry.io/170806"
    //   }
    // }
  ]
};
