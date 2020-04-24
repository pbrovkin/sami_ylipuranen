import React from 'react'
import { Link } from "gatsby"
import styles from './hamburger.module.css'

const Hamburger = ({setClass}) => {
  
  const onChangeClass = () => {
    setClass('overlayDisplay')
  };
  
  return (
      <>
        <Link to="#" onClick={() => onChangeClass()}>
          <ul className={styles.list}>
            <li className={styles.item}></li>
            <li className={styles.item}></li>
            <li className={styles.item}></li>
          </ul>
        </Link>
      </>
  
  )
};

export default Hamburger
