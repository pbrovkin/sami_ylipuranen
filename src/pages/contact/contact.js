import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styles from './contact.module.css';
import Subtitle from "../../components/subtitle";
import imgPerson from '../../img/S.png'

const Contact = () => {
  
  return (
      <Layout>
        <SEO title="Contact" />
        <div className={styles.contactPage}>
          <div className={`container ${styles.contactContainer}`}>
            <div className={styles.contactBlock}>
              <div className={styles.innerContactBlock}>
                <div className={styles.subtitleBlock}>
                  <Subtitle subtitle={'Contact info'} />
                </div>
                <div>
                  <div className={styles.phone}>
                    <p>Phone: <span className={styles.number}>+358451281140</span></p>
                  </div>
                  <div className={styles.email}>
                    <p>Email: <span className={styles.emailAddress}>info@terveettavat.fi</span></p>
                  </div>
                </div>
              
              </div>
            </div>
            <div className={styles.imgBlock}>
              <img className={styles.picPerson} src={imgPerson} alt="person" />
            </div>
          </div>
        </div>
      </Layout>
  )
};

export default Contact
