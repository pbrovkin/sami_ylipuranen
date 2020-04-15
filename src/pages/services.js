import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const Services = () => {
    
    return (
        <Layout>
            <SEO title="Services" />
            <Bio />
            <div>
                <h1>Services </h1>
                <ul>
                    <li>service 1</li>
                    <li>service 2</li>
                    <li>service 3</li>
                </ul>
                <Link to="/">Go Home</Link>
            </div>
        </Layout>
    )
}

export default Services