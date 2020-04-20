import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Filter from "../../components/filter"

const Blogs = ({ data, location }) => {
  const [filter, setFilter] = useState("")

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges

  const postsToShow = posts.filter(post =>
    post.node.title.toLowerCase().includes(filter.toLowerCase())
  )

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blogs" />
      <Filter value={filter} onChanpge={handleFilterChange} />
      {postsToShow.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <article key={node.slug}>
            <header>
              <h3>
                <Link to={node.slug}>{title}</Link>
              </h3>
            </header>
            <section>
              <p>{node.description}</p>
            </section>
          </article>
        )
      })}
      <hr />
      <Link to="/">← Go home</Link>
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
