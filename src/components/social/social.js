import React from 'react'
import Sprite from '../../img/sprite.svg'
import styles from './social.module.css'

const Social = () => {

  const socials = [
    { id: 1, link: 'https://www.instagram.com/samiaaronn/', name: '#inst' },
    { id: 2, link: 'https://www.youtube.com/', name: '#youtube' },
    { id: 3, link: 'https://www.facebook.com/samiaaronn/', name: '#facebook' },
  ];

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
