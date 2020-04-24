import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Footer from "../components/footer"
import { rhythm } from "../utils/typography"


function returnImgTagOrVideo(url) {
  let fileExt = url.substring(url.lastIndexOf(".") + 1, url.length) || url
  if (fileExt === "jpg" || fileExt === "jpeg" || fileExt === "png" || fileExt === "gif") {
    return <img src={"https:" + url} alt="blog" />
  } else if (fileExt === "mp4") {
    return (
      <video width="100%" src={"https:" + url} loop autoPlay muted playsInline></video>
    )
  } else {
    return "invalid media"
  }
}

const BlogPostContentfulTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
 /*  console.log(post.media.file.url); */
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <>{returnImgTagOrVideo(post.media.file.url)}</>
        {/* <img src={"https:" + post.media.file.url} alt="blogimage" /> */}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Footer />
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost( slug: { eq: $slug }) {
      title
      date(formatString: "MMMM DD, YYYY")
      description
      content {
        childContentfulRichText {
          html
        }
      }
      media {
        file {
          url
          contentType
        }
      }
    }
  }
`
