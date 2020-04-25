import React from 'react'
import styles from './hamburger.module.css'

const Hamburger = ({setClass}) => {
  
  const onChangeClass = () => {
    setClass('overlayDisplay')
  };
  
  return (
      <>
          <ul onClick={() => onChangeClass()} className={styles.list}>
            <li className={styles.item}></li>
            <li className={styles.item}></li>
            <li className={styles.item}></li>
          </ul>
      </>
  
  )
};

export default Hamburger
