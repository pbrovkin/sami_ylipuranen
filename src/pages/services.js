import React from 'react';
import { Link } from "gatsby"
import './services.css'

const vahvaAamu = `Vahva aamu / 8 vko`
const vahvaAamuText1 = `Rakennamme yhdessä vahvan aamun, jolla ohjaat koko päivän kulun haluamaasi suuntaan, halusit sitten pudottaa painoa, lisätä vireyttä, parantaa ryhtiä tai saavuttaa iloisen ja voittamattoman asenteen.`
const vahvaAamuText2 = `Opit huoltamaan kehoasi, syömään terveellisemmin, hallitsemaan mieltäsi, sekä liikkumaan monipuolisemmin.`

const kotonaJaUlkona = `Kotona ja ulkona / 4 vko`
const kotonaJaUlkonaText1 = `Tällä kurssilla opit harjoittelemaan kotona ja hyödyntämään ulkoliikuntavälineitä sinulle sopivalla tavalla.`
const kotonaJaUlkonaText2 = `Saat käyttöösi liikepankin koti- ja ulkoharjoittelua varten, sekä yhteensä 12 harjoitusta kotiin, ulos ja kehon huoltamiseksi.`
const kotonaJaUlkonaText3 = `Kurssi kestää 4 viikkoa, mutta ohjelmat jäävät sinulle itsenäistä harjoittelua varten talteen.`

const olenAktiivinen = `Olen aktiivinen / 6 vko`
const olenAktiivinenText1 = `Ota vihdoin ensimmäinen askel terveellisempää elämää kohti! Valmennuksella etsimme sinulle parhaimman tavan liikkua ja syödä terveellisesti nautintoja unohtamatta. Teemme arkeesi pehmeitä muutoksia, joilla terveet tavat jäävät pysyviksi`
const olenAktiivinenText2 = `Valmennus on suunnattu 40 + vuotiaille, vähän tai ei ollenkaan liikuntaa harrastaville, jotka ovat heränneet tarpeeseen tehdä pysyvä muutos elintapoihin.`

/*Component Body*/

const Services = () => {
  return (
    <Layout>
      <article id="2" className="service-container">
        <SEO title="Services" />
        <ServiceItem
          title={vahvaAamu}
          text1={vahvaAamuText1}
          text2={vahvaAamuText2}
        />
        <ServiceItem
          title={kotonaJaUlkona}
          text1={kotonaJaUlkonaText1}
          text2={kotonaJaUlkonaText2}
          text3={kotonaJaUlkonaText3}
        />
        <ServiceItem
          title={olenAktiivinen}
          text1={olenAktiivinenText1}
          text2={olenAktiivinenText2}
        />
      </article>
    </Layout>
  )
}

export default Services