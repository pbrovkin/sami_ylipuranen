import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Bio from "../../components/bio"
import SEO from "../../components/seo"
import Filter from "../../components/filter"
import { rhythm } from "../../utils/typography"

const Blogs = ({ data, location }) => {
  const [filter, setFilter] = useState('')

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  
  const postsToShow = posts.filter(post => post.node.title.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blogs" />
      <Bio />
      <Filter value={filter} onChange={handleFilterChange} />
      {postsToShow.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <article key={node.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p>{node.description}</p>
            </section>
          </article>
        )
      })}
      <Link to="/">Go home</Link>
    </Layout>
  )
}

export default Blogs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          description
          slug
        }
      }
    }
  }
`