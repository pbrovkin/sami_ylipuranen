import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from "../../components/footer"
import styles from './contact.module.css';
import Subtitle from "../../components/subtitle";
import imgPerson from '../../img/S.png'
import Social from "../../components/social";

const Contact = () => {
  
  return (
      <Layout>
        <SEO title="Contact" />
        <div className={styles.contactPage}>
          <div className={`container ${styles.contactContainer}`}>
            <div className={styles.contactBlock}>
              <Subtitle subtitle={'Contact info'} />
              <div>
                <div className={styles.phone}>
                  <p>Phone: <span className={styles.number}>+358451281140</span></p>
                </div>
                <div className={styles.email}>
                  <p>Email: <span className={styles.emailAddress}>info@terveettavat.fi</span></p>
                </div>
              </div>
              <div className={styles.socials}>
                <Social />
              </div>
            </div>
            <div className={styles.imgBlock}>
              <img className={styles.picPerson} src={imgPerson} alt="person" />
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
  )
};

export default Contact
