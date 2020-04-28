import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styles from './home.module.css'
import Typist from 'react-typist';


const Etusivu = () => {
  
  return (
      <Layout>
        <div className={styles.homePage}>
          <div className={`container ${styles.homeContainer}`}>
            <div className={styles.homeContent}>
              <div className={styles.titleBlock}>
                <SEO title="Terveet Tavat" />
                <Typist cursor={{show: true,hideWhenDone: true,
                  hideWhenDoneDelay: 100}} startDelay={1600} avgTypingDelay={100}>
                  <h1 className={styles.title}>Terveet Tavat</h1>
                </Typist>
              </div>
              <div className={styles.descBlock}>
                <p>
                  Terveet tavat on hyvinvointisivusto, jonka tarkoituksena on
                  auttaa sinua lisäämään arkeesi kehon ja mielen terveyttä tukevia
                  tapoja. Toivomme, että sivujen päivittyvän sisällön avulla innostut
                  ottamaan pieniä askeleita kohti vireämpää ja ryhdikkäämpää arkea.
                  Tarjoamme myös verkkovalmennusta heille, jotka haluavat oikeasti
                  saada muutoksen aikaan.
                </p>
              </div>
              <div className={styles.quoteBlock}>
                <span className={styles.quote}>
                  <p><em>“Projektit päättyvät, tavat säilyvät”</em></p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
};

export default Etusivu
