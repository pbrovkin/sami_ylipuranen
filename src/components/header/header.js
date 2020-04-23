import React from "react"
import { Link } from "gatsby"
import styles from './header.module.css'
import Hamburger from "../hamburger-menu";


const Header = ({ siteTitle, menuLinks }) => {
  
  return (
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logoBlock}>
            <Link className={styles.logo} to="/">
              {siteTitle}
            </Link>
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
            <div className={styles.hamburgerBLock}>
              <Hamburger />
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