module.exports = {
  siteMetadata: {
    title: 'Gatsby starter Firebase',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              light: '#ffad42',
              main: '#f57c00',
              dark: '#bb4d00',
            },
            secondary: {
              light: '#9c786c',
              main: '#6d4c41',
              dark: '#40241a',
            },
            error: {
              light: '#ff7961',
              main: '#f44336',
              dark: '#ba000d',
            },
          },
          typography: {
            useNextVariants: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-firebase',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffb200',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-layout',
    // 'gatsby-plugin-offline',
  ],
}
