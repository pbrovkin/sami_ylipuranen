import React from 'react'
import styles from './filter.module.css'
import Sprite from "../../img/sprite.svg";


const Filter = ({value, onChange}) => {
  return (
      <form id="form" className={styles.formBlog}>
        <div className={styles.formBlock}>
          <input
              value={value}
              onChange={onChange}
              className={styles.inputBlog}
              type="text"
              placeholder="Etsi blogin otsikko..."
          />
          <div className={styles.imgBlock}>
            <svg className={styles.iconMagnifier}>
              <use href={Sprite + '#magnifier'} />
            </svg>
          </div>
        </div>
      </form>
  )
};

export default Filter

