import React from 'react'
import styles from "./overlay.module.css";
import {Link} from "gatsby";
import '../../styles/global.css'

const Overlay = ({clazz, setClass}) => {
  
  const menuLinks = [
    {
      name: 'Etusivu',
      link: '/'
    },
    {
      name: 'Verkkovalmennus',
      link: '/verkkovalmennus'
    },
    {
      name: 'Blogi',
      link: '/blogi'
    },
    {
      name: 'Yhteystiedot',
      link: '/yhteystiedot'
    }
    ];
  
  const onChangeClass = () => {
    setClass('overlay')
  };
  
  return (
      <div className={`${clazz}`}>
        <div className={styles.overlayContainer}>
          <div className={styles.top}>
            <div className={styles.logoBlock}>
              <Link className={styles.logo} to="/">
                Terveet Tavat
              </Link>
            </div>
            <div className={styles.btnBlock}>
              <div onClick={() => onChangeClass()} className={styles.btnClosed}>X</div>
            </div>
          </div>
          <div className={styles.navBlock}>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {menuLinks.map(link => (
                    <li className={styles.item} key={link.name}>
                      <Link className={styles.link} activeClassName={styles.activeLink} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </div>
  )
  
};

export default Overlay

