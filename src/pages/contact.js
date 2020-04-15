<<<<<<< HEAD
import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const Contact = () => {
    
    return (
        <Layout>
            <SEO title="Contact" />
            <Bio />
            <div>
                <h1>Contacts </h1>
                <ul>
                    <li>Contact 1</li>
                    <li>Contact 2</li>
                    <li>Contact 3</li>
                </ul>
                <Link to="/">Go Home</Link>
            </div>
        </Layout>
    )
}

export default Contact
=======
import React from 'react'
import './contact.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to the Contact page</p>
  </Layout>
)

export default Contact
>>>>>>> 065d53acf10f88250fdf8348eb9a24e4c2540806
