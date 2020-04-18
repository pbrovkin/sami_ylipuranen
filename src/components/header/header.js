import React from "react"
import {Link} from "gatsby"
import styles from './header.module.css'


const Header = ({siteTitle, menuLinks}) => (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div>
          <Link className={styles.logo} to="/">
            {siteTitle}
          </Link>
        </div>
        <div>
          <nav>
            <ul className={styles.list}>
              {menuLinks.map(link => (
                  <li className={styles.item} key={link.name}>
                    <Link className={styles.link} to={link.link}>
                      {link.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
);

/* Header.propTypes = {
siteTitle: PropTypes.string,
}
Header.defaultProps = {
siteTitle: ``,
} */
export default Header