import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Filter from "../../components/filter"

/*Styles*/

const Section = {
  width: '100%',
  backgroundColor: 'rgba(57, 49, 49, 1)',
  padding: '80px 2rem 2rem 2rem',
  fontFamily: 'Montserrat,sans-serif',
  height: '100%'
}
const SectionTitle = {
  color: '#FFF',
  fontSize: '3rem',
  fontWeight: '700',
  lineHeight: '87px',
  marginTop: '0',
  fontFamily: 'Montserrat,sans-serif',
}
const BlogTitle = {
  color: 'rgba(0, 198, 139, 1)',
  textDecoration: 'none',
  boxShadow: `none`,
  fontWeight: '500',
  textTransform: 'uppercase',
  fontFamily: 'Montserrat,sans-serif',
}
const BlogText = {
  display: 'block',
  width: '90%',
  listStyle: 'none',
  padding: '1rem',
  background: '#FFF',
  transform: 'skew(-10deg)',
  boxShadow: '4px 4px 9px 0 rgba(0,0,0,0.5)',
  fontFamily: 'Montserrat,sans-serif',
  fontWeight: '500'
}
const returnLink = {
  color: 'rgba(0, 198, 139, 1)',
  fontWeight: '600',
  fontFamily: 'Montserrat,sans-serif',
}
const bottomLinks = {
  display: 'flex',
  justifyContent: 'space-between'
}

/*Component*/

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
      <SEO title="Blogi" />
      <div style={Section}>
        <h1 style={SectionTitle}>Blogi</h1>
        <Filter value={filter} onChange={handleFilterChange} />
        {postsToShow.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={node.slug}>
              <header>
                <h3 >
                  <Link style={BlogTitle} to={node.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
              <section>
                <p style={BlogText}>{node.description}</p>
              </section>
            </article>
          )
        })}
        <div style={bottomLinks}>
          <Link to="/" style={returnLink}>← Etusivu</Link>
          <Link to="/contact" style={returnLink}>Yhteistiedot →</Link>
        </div>
      </div>
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
          date
          title
          description
          slug
        }
      }
    }
  }
`
