import React from "react"
import { Link } from "gatsby"
<<<<<<< HEAD
=======
import Bio from "../components/bio"
>>>>>>> 065d53acf10f88250fdf8348eb9a24e4c2540806
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import './index.css'

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