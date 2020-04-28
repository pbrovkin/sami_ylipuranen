import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import '../styles/global.css'
import styles from './blog-post-contentfull.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const returnImgTagOrVideo = (url) => {
  console.log(url)
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
  const { previousBlog, nextBlog } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description}
      />
      <div className={styles.blog}>
        <div className={`container ${styles.blogContainer}`}>
          <div className={styles.blogBtn}>
            {previousBlog && (
              <AniLink fade duration={.3} className={styles.btnPrevious} to={previousBlog} rel="prev">
                ← Previous
              </AniLink>
            )}
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.date}>
              <h3>
                {post.date}
              </h3>
            </div>
            <div className={styles.title}>
              <h1>
                {post.title}
              </h1>
            </div>
            <div className={styles.mediaBlock}>
              <div className={styles.mediaItem}>{(post.media === null) ? null : returnImgTagOrVideo(post.media.file.url)}</div>
            </div>
            <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
          </div>
          <div className={styles.blogBtn}>
            {nextBlog && (
              <AniLink fade duration={.3} className={styles.btnNext} to={nextBlog} rel="next">
                Next →
              </AniLink>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
};

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
`;
