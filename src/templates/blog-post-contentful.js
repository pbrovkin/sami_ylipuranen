import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Footer from "../components/footer"

const BlogPostContentfulTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description}
      />
      <article>
        <header>
          <h1>
            {post.title}
          </h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <hr />
      </article>

      <nav>
        <ul>
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
      description
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
