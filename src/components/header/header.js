import React from "react"
import {Link} from "gatsby"
import '../../styles/global.css'
import styles from './header.module.css'


const Header = ({siteTitle, menuLinks}) => (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header_container}>
          <h1>
            <Link className={styles.title} to="/">
              {siteTitle}
            </Link>
          </h1>
          <div>
            <nav>
              <ul className={styles.list}>
                {menuLinks.map(link => (
                    <li className={styles.item} key={link.name}>
                      <Link to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
        
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