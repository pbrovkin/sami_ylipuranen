import React, {useState} from "react"
import { Link } from "gatsby"
import styles from './header.module.css'
import Hamburger from "../hamburger-menu";
import Overlay from "../overlay";


const Header = ({ siteTitle, menuLinks }) => {
  
  const [clazz, setClass] = useState('overlay');
  
  return (
      <header className={styles.header}>
        <Overlay clazz={clazz} setClass={setClass}/>
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