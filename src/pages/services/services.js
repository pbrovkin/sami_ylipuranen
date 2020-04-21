import React from 'react'
import Layout from "../../components/layout"
import Title from "../../components/title";
import styles from './services.module.css'
import Subtitle from "../../components/subtitle";

const Services = () => {
  
  const services = [
    {
      id: 1,
      subtitle: 'Strong morning / 8 weeks',
      serviceText: 'Together, we build a strong morning to steer the entire day in the direction you want, whether you wanted to lose weight, increase alertness, improve posture, or achieve a happy and invincible attitude. You will learn to take care of your body, eat healthier, control your mind, and move more versatiles.'
    },
    {
      id: 2,
      subtitle: 'At home and outdoors / 4 weeks',
      serviceText: 'In this course, you will learn to practice at home and utilize outdoor exercise equipment in a way that suits you. You will have access to a commercial bank for home and outdoor training, as well as a total of 12 workouts for home, out and body care. The course lasts 4 weeks, but the programs will be saved for you to practice independently.'
    },
    {
      id: 3,
      subtitle: 'I\'m an active / 6 weeks',
      serviceText: 'Finally take the first step towards a healthier life! With coaching, we look for the best way for you to move around and eat healthily without forgetting the pleasures. We make soft changes to your daily routine to keep healthy habits permanent. The coaching is aimed at 40+ year olds, with little or no exercise, who have awakened to the need to make a permanent change in lifestyle.'
    },
  ];
  
  return (
      <Layout>
        <div className={styles.servicesPage}>
          <div className={`container ${styles.servicesContainer}`}>
            <div className={styles.titleBlock}>
              <Title title={'Services'} />
            </div>
            <div className={styles.servicesWelcome}>
              <p>Tervetuloa treenamaan verkossa
                <a className={styles.linkSyke}
                   href="https://syketribe.fi"
                   target="_blank"
                   rel="noopener noreferrer">
                  Syke-tribe</a>
                 sovelluksen kautta. Napsauta
                <a className={styles.linkSyke}
                   href="https://syketribe.fi/clientsignup/5292bb73b5a0303d17245ccc7f18ffd2?s"
                   target="_blank"
                   rel="noopener noreferrer">
                  liity nyt</a>
                 saadaksesi tietosi, että sinusta tulee online-asiakas. Muista valita
                 verkkoharjoittelupaketti esim.
                 "Vahva aamu / 8 vko" ja lisätä se lomakkeen lopussa olevaan "Vapaa sana" kenttään.
              </p>
            </div>
            <div className={styles.servicesBlock}>
              <ul className={styles.list}>
                {services.map((i) => <li key={i.id}
                                         className={styles.item}>
                  <a className={styles.servicesLink}
                     href="https://syketribe.fi/clientsignup/5292bb73b5a0303d17245ccc7f18ffd2?s"
                     target="_blank"
                     rel="noopener noreferrer">
                    <div className={styles.subtitleBlock}>
                      <Subtitle subtitle={i.subtitle} />
                    </div>
                    <div className={styles.textBlock}>
                      <p>{i.serviceText}</p>
                    </div>
                  </a>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
  )
};

export default Services
