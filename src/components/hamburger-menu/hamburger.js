import React from 'react'
import styles from './hamburger.module.css'

const Hamburger = ({setClass}) => {
  
  const onChangeClass = () => {
    setClass('overlayDisplay')
  };
  
  return (
      <>
        <button onClick={() => onChangeClass()}
            className={styles.list}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </button>
      </>
  
  )
};

export default Hamburger
