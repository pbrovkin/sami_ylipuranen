import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Sprite from '../../img/sprite.svg'
import styles from './social.module.css'

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
    site {
      siteMetadata {
        socials {
          id
          link
          name
        }
      }
    }
  }
  `);
  
  const socials = data.site.siteMetadata.socials
  
  console.log(data);
  return (
    <ul className={styles.socialList}>
      {socials.map((i) => <li key={i.id} >
        <a href={i.link}
          target="_blank"
          rel="noopener noreferrer">
          <svg className={styles.icon}>
            <use href={Sprite + i.name} />
          </svg>
        </a>
      </li>)}
    </ul>

  )

};

export default Social
