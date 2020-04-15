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