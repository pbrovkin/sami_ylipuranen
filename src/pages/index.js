import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Terveet Tavat" />
    <Bio />
    <h1>Welcome to personal trainer page</h1>
    <p>Now go build something great.</p>
    <Link to="/services/">Go to Services</Link>
  </Layout>
)

export default IndexPage