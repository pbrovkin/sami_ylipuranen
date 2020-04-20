import React from 'react'
import Layout from "../../components/layout"
import Title from "../../components/title";
import styles from './services.module.css'
import Subtitle from "../../components/subtitle";
import Button from "../../components/button";

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
            <div className={styles.servicesBlock}>
              <ul className={styles.list}>
                {services.map((i) => <li key={i.id}
                                         className={styles.item}>
                  <div className={styles.subtitleBlock}>
                    <Subtitle subtitle={i.subtitle} />
                  </div>
                  <div className={styles.textBlock}>
                    <p>{i.serviceText}</p>
                  </div>
                  <div className={styles.buttonBlock}>
                    <Button label={'Reed more'}/>
                  </div>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
  )
};

export default Services


// /*Styles*/
//
// const Section = {
//     width: '100%',
//     backgroundColor: 'rgba(57, 49, 49, 1)',
//     padding: '80px 2rem 2rem 2rem',
// }
//
// const SectionTitle = {
//     color: '#FFF',
//     fontSize: '3rem',
//     fontWeight: '700',
//     lineHeight: '87px',
//     marginTop: '0',
//     fontFamily: 'Montserrat,sans-serif',
// }
//
// const SectionIntro = {
//     color: '#FFF',
//     fontFamily: 'Montserrat,sans-serif',
//     lineHeight: '2rem',
// }
//
// const ListContainer = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between'
// }
//
// const ServiceItem = {
//     width: '90%',
//     display: 'flex',
//     flexDirection: 'column',
//     transform: 'skew(-10deg)',
//     listStyle: 'none',
//     padding: '1rem',
//     margin: '2rem',
// }
//
// const ServiceTitle = {
//     height: '3rem',
//     color: 'rgba(0, 198, 139, 1)',
//     marginTop: '0',
//     marginBottom: '2rem',
//     textAlign: 'center',
//     fontFamily: 'Montserrat,sans-serif',
//     fontWeight: '500',
// }
//
// const ServiceText = {
//     color: '#000',
//     textAlign: 'left',
//     fontFamily: 'Montserrat,sans-serif',
//     fontWeight: '500',
//     background: '#FFF',
//     boxShadow: '4px 4px 9px 0 rgba(0,0,0,0.5)',
//     padding: '1rem'
// }
//
// const ServiceLink = {
//     color: 'rgba(0, 198, 139, 1)',
//     textDecoration: 'none',
//     margin: '0.5rem',
//     padding: '0.5rem',
//     bottomBorder: '2px solid #000',
//     fontFamily: 'Montserrat,sans-serif',
//     fontWeight: '500',
//     textTransform: 'uppercase'
// }
//
// const returnLink = {
//     color: 'rgba(0, 198, 139, 1)',
//     fontWeight: '600',
//     fontFamily: 'Montserrat,sans-serif',
// }
// const bottomLinks = {
//     display: 'flex',
//     justifyContent: 'space-between'
// }
//
// /*Component*/
//
// const Services = () => {
//
//     return (
//         <Layout>
//             <SEO title="Services" />
//             <div style={Section}>
//                 <h1 style={SectionTitle}>Verkkovalmennukset</h1>
//                 <p style={SectionIntro}>Tervetuloa treenamaan verkossa<a href="https://syketribe.fi" target="_blank"
//                                                                          rel="noopener noreferrer" style={ServiceLink}>
//                     Syke-tribe</a>sovelluksen kautta.
//                                         Napsauta<a href="https://syketribe.fi/clientsignup/5292bb73b5a0303d17245ccc7f18ffd2?s" target="_blank"
//                                                    rel="noopener noreferrer" style={ServiceLink}>
//                         liity nyt</a>saadaksesi tietosi, että sinusta tulee online-asiakas. Muista valita verkkoharjoittelupaketti esim.
//                                         "Vahva aamu / 8 vko" ja lisätä se lomakkeen lopussa olevaan "Vapaa sana" kenttään.
//                 </p>
//                 <ul style={ListContainer}>
//                     <li style={ServiceItem} >
//                         <h2 style={ServiceTitle}>Vahva aamu / 8 vko</h2>
//                         <div style={ServiceText}>
//                             <p >
//                                 Rakennamme yhdessä vahvan aamun, jolla ohjaat koko päivän
//                                 kulun haluamaasi suuntaan, halusit sitten pudottaa painoa,
//                                 lisätä vireyttä, parantaa ryhtiä tai saavuttaa iloisen ja
//                                 voittamattoman asenteen.</p>
//                             <p>Opit huoltamaan kehoasi, syömään terveellisemmin, hallitsemaan
//                                mieltäsi, sekä liikkumaan monipuolisemmin.
//                             </p>
//                         </div>
//
//                     </li>
//                     <li style={ServiceItem}>
//                         <h2 style={ServiceTitle}>Kotona ja ulkona / 4 vko</h2>
//                         <div style={ServiceText}>
//                             <p>
//                                 Tällä kurssilla opit harjoittelemaan kotona ja hyödyntämään
//                                 ulkoliikuntavälineitä sinulle sopivalla tavalla.
//                                 Saat käyttöösi liikepankin koti- ja ulkoharjoittelua varten,
//                                 sekä yhteensä 12 harjoitusta kotiin, ulos ja kehon huoltamiseksi.
//                                 Kurssi kestää 4 viikkoa, mutta ohjelmat jäävät sinulle itsenäistä
//                                 harjoittelua varten talteen.
//                             </p>
//                         </div>
//                     </li>
//                     <li style={ServiceItem}>
//                         <h2 style={ServiceTitle}>Olen aktiivinen / 6 vko</h2>
//                         <div style={ServiceText}>
//                             <p>
//                                 Ota vihdoin ensimmäinen askel terveellisempää elämää kohti! Valmennuksella
//                                 etsimme sinulle parhaimman tavan liikkua ja syödä terveellisesti nautintoja
//                                 unohtamatta. Teemme arkeesi pehmeitä muutoksia, joilla terveet tavat jäävät
//                                 pysyviksi.</p>
//                             <p> Valmennus on suunnattu 40 + vuotiaille, vähän tai ei ollenkaan liikuntaa
//                                 harrastaville, jotka ovat heränneet tarpeeseen tehdä pysyvä muutos elintapoihin.
//                             </p>
//                         </div>
//                     </li>
//                 </ul>
//                 <hr />
//                 <div style={bottomLinks}>
//                     <Link to="/" style={returnLink}>← Etusivu</Link>
//                     <Link to="/blogs" style={returnLink}>Blogi →</Link>
//                 </div>
//             </div>
//         </Layout>
//     )
// }
//
// export default Services