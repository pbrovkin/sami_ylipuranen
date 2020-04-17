import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author.name}</strong> {author.summary}
        {` `}
        <br />
        <a href={`https://instagram.com/${social.instagram}`}>
          Follow on Instagram
        </a>
      </p>
    </div>
  )
}

export default Bio
