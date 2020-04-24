require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Terveet Tavat`,
    menuLinks: [
      {
        name: 'Etusivu',
        link: '/'
      },
      {
        name: 'Verkkovalmennus',
        link: '/verkkovalmennus'
      },
      {
        name: 'Blogi',
        link: '/blogi'
      },
      {
        name: 'Yhteystiedot',
        link: '/yhteystiedot'
      }
    ],
    author: {
      name: `Sami Ylipuranen`,
      summary: `Valmentaja`,
    },
    description: `Personal trainer website.`,
    siteUrl: `http://localhost:8000/`,
    social: {
      instagram: `samiaaronn`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat","Lato"],
          urls: ["./static/fonts/font.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://gmail.us4.list-manage.com/subscribe/post?u=5f53e9e0425e25be4ef97729a&amp;id=f7a1734428",
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `az44re8kag24`,
        accessToken:`N8O-4Vq0O89bBs0sOTcq_3ZRLIoa4-RCuxapcEYxQSM`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    
   
  ],
  
};




