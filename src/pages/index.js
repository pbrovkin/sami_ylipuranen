import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Sami Ylipuranen" />
    <Bio />
    <h1>Welcome to my page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to About</Link>
  </Layout>
)

export default IndexPage