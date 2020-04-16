import React from 'react'
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from "../../components/footer"

const Home = () => {

    return (
        <Layout>
            <SEO title="Terveet Tavat" />

            <h1>Terveet Tavat</h1>
            <p>
                Terveet tavat on hyvinvointisivusto, jonka tarkoituksena on
                auttaa sinua lisäämään arkeesi kehon ja mielen terveyttä tukevia
                tapoja. Toivomme, että sivujen päivittyvän sisällön avulla innostut
                ottamaan pieniä askeleita kohti vireämpää ja ryhdikkäämpää arkea.
                Tarjoamme myös verkkovalmennusta heille, jotka haluavat oikeasti
                saada muutoksen aikaan.
            </p>
            <hr />
            <Link to="/services/">Go to Services →</Link>
            <Footer/>
        </Layout>
    )
}

export default Home
