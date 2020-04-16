import React from 'react'
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Bio from "../../components/bio"
import SEO from "../../components/seo"

const Services = () => {

    return (
        <Layout>
            <SEO title="Services" />
            <Bio />
            <div>
                <h1>Services </h1>
                <ul>
                    <li>
                        <h2>Vahva aamu / 8 vko</h2>
                        <p>
                            Rakennamme yhdessä vahvan aamun, jolla ohjaat koko päivän
                            kulun haluamaasi suuntaan, halusit sitten pudottaa painoa,
                            lisätä vireyttä, parantaa ryhtiä tai saavuttaa iloisen ja
                            voittamattoman asenteen.
                            Opit huoltamaan kehoasi, syömään terveellisemmin, hallitsemaan
                            mieltäsi, sekä liikkumaan monipuolisemmin.
                        </p>
                    </li>
                    <li>
                        <h2>Kotona ja ulkona / 4 vko</h2>
                        <p>
                            Tällä kurssilla opit harjoittelemaan kotona ja hyödyntämään
                            ulkoliikuntavälineitä sinulle sopivalla tavalla.
                            Saat käyttöösi liikepankin koti- ja ulkoharjoittelua varten,
                            sekä yhteensä 12 harjoitusta kotiin, ulos ja kehon huoltamiseksi.
                            Kurssi kestää 4 viikkoa, mutta ohjelmat jäävät sinulle itsenäistä
                            harjoittelua varten talteen.
                        </p>
                    </li>
                    <li>
                        <h2>Olen aktiivinen / 6 vko</h2>
                        <p>
                            Ota vihdoin ensimmäinen askel terveellisempää elämää kohti! Valmennuksella
                            etsimme sinulle parhaimman tavan liikkua ja syödä terveellisesti nautintoja
                            unohtamatta. Teemme arkeesi pehmeitä muutoksia, joilla terveet tavat jäävät
                            pysyviksi.
                            Valmennus on suunnattu 40 + vuotiaille, vähän tai ei ollenkaan liikuntaa
                            harrastaville, jotka ovat heränneet tarpeeseen tehdä pysyvä muutos elintapoihin.    
                        </p>
                    </li>
                </ul>
                <Link to="/">Go Home</Link>
            </div>
        </Layout>
    )
}

export default Services