import React from 'react'
import Layout from "../../components/layout"
import Title from "../../components/title";
import styles from './services.module.css'
import ServiceItem from "../../components/service-item/service-item"
import SEO from "../../components/seo";

const Verkkovalmennus = () => {
  
  const services = [
    {
      id: 1,
      subtitle1: `Vahva aamu / 8 vko`,
      serviceText: `Rakennamme yhdessä vahvan aamun, jolla ohjaat koko päivän
      kulun haluamaasi suuntaan, halusit sitten pudottaa painoa,
      lisätä vireyttä, parantaa ryhtiä tai saavuttaa iloisen ja
      voittamattoman asenteen.`,
      serviceText2: `Opit huoltamaan kehoasi, syömään terveellisemmin, hallitsemaan mieltäsi, sekä liikkumaan monipuolisemmin.`
    },
    {
      id: 2,
      subtitle2: `Kotona ja ulkona / 4 vko`,
      serviceText: `Tällä kurssilla opit harjoittelemaan kotona ja hyödyntämään
      ulkoliikuntavälineitä sinulle sopivalla tavalla.
      Saat käyttöösi liikepankin koti- ja ulkoharjoittelua varten,
      sekä yhteensä 12 harjoitusta kotiin, ulos ja kehon huoltamiseksi.
      Kurssi kestää 4 viikkoa, mutta ohjelmat jäävät sinulle itsenäistä
      harjoittelua varten talteen.`
    },
    {
      id: 3,
      subtitle3: `Olen aktiivinen / 6 vko`,
      serviceText:  `Ota vihdoin ensimmäinen askel terveellisempää elämää kohti! Valmennuksella
      etsimme sinulle parhaimman tavan liikkua ja syödä terveellisesti nautintoja
      unohtamatta. Teemme arkeesi pehmeitä muutoksia, joilla terveet tavat jäävät
      pysyviksi.`,
      serviceText2: `Valmennus on suunnattu 40 + vuotiaille, vähän tai ei ollenkaan liikuntaa
      harrastaville, jotka ovat heränneet tarpeeseen tehdä pysyvä muutos elintapoihin.`
    },
  ];
  
  return (
      <Layout>
        <SEO title="Verkkovalmennus" />
        <div className={styles.servicesPage}>
          <div className={`container ${styles.servicesContainer}`}>
            <div className={styles.titleBlock}>
              <Title title={'Verkkovalmennus'} />
            </div>
            <div className={styles.servicesWelcome}>
              <p className={styles.textBlock}>Tervetuloa treenamaan verkossa
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
              <div className={styles.list}>
              <a href="http://www.terveettavat.fi/kotona-ja-ulkona" target="_blank" rel="noopener noreferrer"><ServiceItem subtitle={services[1].subtitle2} text1={services[1].serviceText} /></a>
              <a href="http://www.terveettavat.fi/olen-aktiivinen" target="_blank" rel="noopener noreferrer"><ServiceItem subtitle={services[2].subtitle3} text1={services[2].serviceText} text2={services[2].serviceText2} /></a>
              <a href="http://www.terveettavat.fi/vahva-aamu" target="_blank" rel="noopener noreferrer"><ServiceItem subtitle={services[0].subtitle1} text1={services[0].serviceText} text2={services[0].serviceText2} /></a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
};

export default Verkkovalmennus
