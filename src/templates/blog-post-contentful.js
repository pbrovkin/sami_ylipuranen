import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import '../styles/global.css'
import styles from './blog-post-contentfull.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";


// function returnImgTagOrVideo(url) {
//   let fileExt = url.substring(url.lastIndexOf(".") + 1, url.length) || url
//   if (fileExt === "jpg" || fileExt === "jpeg" || fileExt === "png" || fileExt === "gif") {
//     return <img src={"https:" + url} alt="blog" />
//   } else if (fileExt === "mp4") {
//     return (
//         <video width="100%" src={"https:" + url} loop autoPlay muted playsInline></video>
//     )
//   } else {
//     return "invalid media"
//   }
// }

const BlogPostContentfulTemplate = ({data, pageContext, location}) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const {previous, next} = pageContext
  
  return (
      <Layout location={location} title={siteTitle}>
        <SEO
            title={post.title}
            description={post.description}
        />
        <div className={styles.blog}>
          <div className={`container ${styles.blogContainer}`}>
            <div className={styles.blogBtn}>
              {previous && (
                  <AniLink fade duration={.3} className={styles.btnPrevious} to={previous.slug} rel="prev">
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
                {/*{returnImgTagOrVideo(post.media.file.url)}*/}
                {/* <img src={"https:" + post.media.file.url} alt="blogimage" /> */}
              </div>
              <section dangerouslySetInnerHTML={{__html: post.content.childContentfulRichText.html}} />
            </div>
            <div className={styles.blogBtn}>
              {next && (
                  <AniLink fade duration={.3} className={styles.btnNext} to={next.slug} rel="next">
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
