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
  ],
  plugins: [
    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN

      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://gmail.us4.list-manage.com/subscribe/post?u=5f53e9e0425e25be4ef97729a&amp;id=f7a1734428",
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
   
    `gatsby-plugin-sharp`,
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
         
            {
              resolve: `gatsby-transformer-sharp`
            },
        
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxwidth: 750,
              linkImagesToOriginal: false

            }
          }
        ]
      }
    }
    
     
    // },'gatsby-transformer-remark'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  }