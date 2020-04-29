require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    socials: [
      { id: 1, link: 'https://www.instagram.com/samiaaronn/', name: '#inst'},
      { id: 2, link: 'https://www.youtube.com/', name: '#youtube'},
      { id: 3, link: 'https://www.facebook.com/samiaaronn/', name: '#facebook'},
    ],
    title: `Terveet Tavat`,
    menuLinks: [
      {
        name: "Etusivu",
        link: "/",
      },
      {
        name: "Verkkovalmennus",
        link: "/verkkovalmennus",
      },
      {
        name: "Blogi",
        link: "/blogi",
      },
      {
        name: "Yhteystiedot",
        link: "/yhteystiedot",
      },
    ],
    author: {
      name: `Sami Ylipuranen`,
      summary: `Valmentaja`,
    },
    description: `Terveet Tavat Nettisivut.`,
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
          families: ["Montserrat", "Lato"],
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
       process.env.MAILCHIMP_LINK_ID },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
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
        icon: `src/img/icon-red.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-transition-link`,
    

  ],
};
    
   

  





