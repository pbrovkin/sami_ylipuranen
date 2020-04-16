import React from 'react'
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from "../../components/footer"

const Contact = () => {
    
    return (
        <Layout>
            <SEO title="Contact" />
            <div>
                <h1>Contacts </h1>
                <ul>
                    <li>Contact 1</li>
                    <li>Contact 2</li>
                    <li>Contact 3</li>
                </ul>
                
            </div>
            <hr />
            <Link to="/">Go Home</Link>
            <Footer/>
        </Layout>
    )
}

export default Contact
