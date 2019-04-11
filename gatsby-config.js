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
              light: '#ffffe4',
              main: '#ffe0b2',
              dark: '#cbae82',
            },
            secondary: {
              light: '#fffffb',
              main: '#d7ccc8',
              dark: '#a69b97',
            },
            error: {
              light: '#f05545',
              main: '#b71c1c',
              dark: '#7f0000',
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
    // 'gatsby-plugin-offline',
  ],
}
