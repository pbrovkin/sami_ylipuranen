import React from 'react'
import styles from "./overlay.module.css";
import {Link} from "gatsby";

const Overlay = () => {
  
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
  
  return (
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <div className={styles.top}>
            <div className={styles.logoBlock}>
              <Link className={styles.logo} to="/">
                Terveet Tavat
              </Link>
            </div>
            <div className={styles.btnBlock}>
              <div className={styles.btnClosed}>X</div>
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

