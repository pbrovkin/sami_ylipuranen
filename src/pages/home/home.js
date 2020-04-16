import React from 'react'
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Bio from "../../components/bio"
import SEO from "../../components/seo"

const Home = () => {

    return (
        <Layout>
            <SEO title="Terveet Tavat" />
            <Bio />
            <h1>Terveet Tavat</h1>
            <p>
                Terveet tavat on hyvinvointisivusto, jonka tarkoituksena on
                auttaa sinua lisäämään arkeesi kehon ja mielen terveyttä tukevia
                tapoja. Toivomme, että sivujen päivittyvän sisällön avulla innostut
                ottamaan pieniä askeleita kohti vireämpää ja ryhdikkäämpää arkea.
                Tarjoamme myös verkkovalmennusta heille, jotka haluavat oikeasti 
                saada muutoksen aikaan.
            </p>
            <Link to="/services/">Go to Services</Link>
        </Layout>
    )
}

export default Home
