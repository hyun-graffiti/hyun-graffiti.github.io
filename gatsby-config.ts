import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Developer Hyun`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['Test'],
      },
    },
    'gatsby-plugin-sitemap',
  ],
}

export default config
