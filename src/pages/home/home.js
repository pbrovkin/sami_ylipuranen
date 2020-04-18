import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styles from './home.module.css'

const Home = () => {
  
  return (
      <Layout>
        <div className={styles.homePage}>
          <div className={`container`}>
            <div className={styles.homeContent}>
              <div className={styles.titleBlock}>
                <SEO title="Terveet Tavat" />
                <h1 className={styles.title}>Terveet Tavat</h1>
              </div>
              <div className={styles.descBlock}>
                  <span className={styles.descText}>
                    <p>
                    Terveet tavat on hyvinvointisivusto, jonka tarkoituksena on
                    auttaa sinua lisäämään arkeesi kehon ja mielen terveyttä tukevia
                    tapoja. Toivomme, että sivujen päivittyvän sisällön avulla innostut
                    ottamaan pieniä askeleita kohti vireämpää ja ryhdikkäämpää arkea.
                    Tarjoamme myös verkkovalmennusta heille, jotka haluavat oikeasti
                    saada muutoksen aikaan.
                  </p>
                  </span>
              </div>
            
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default Home
