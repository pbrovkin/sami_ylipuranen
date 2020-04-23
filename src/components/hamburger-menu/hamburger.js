import React from 'react'
import styles from './hamburger.module.css'


const Hamburger = () => {
  return (
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </ul>
  )
};

export default Hamburger
