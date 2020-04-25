import React, {useState} from "react"

import styles from './header.module.css'
import Hamburger from "../hamburger-menu";
import Overlay from "../overlay";
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Header = ({ siteTitle, menuLinks }) => {
  
  const [clazz, setClass] = useState('overlay');
  
  return (
      <header className={styles.header}>
        <Overlay clazz={clazz} setClass={setClass}/>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logoBlock}>
            <AniLink fade duration={.6} className={styles.logo} to="/">
              {siteTitle}
            </AniLink>
          </div>
          <div className={styles.navBlock}>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {menuLinks.map(link => (
                    <li className={styles.item} key={link.name}>
                      <AniLink paintDrip hex='#00C68B' duration={.8} className={styles.link} activeClassName={styles.activeLink} to={link.link}>
                        {link.name}
                      </AniLink>
                    </li>
                ))}
              </ul>
            </nav>
            <div className={styles.hamburgerBLock}>
              <Hamburger setClass={setClass} />
            </div>
          </div>
        </div>
      </header>
  
  )
  
};

/* Header.propTypes = {
siteTitle: PropTypes.string,
}
Header.defaultProps = {
siteTitle: ``,
} */
export default Header