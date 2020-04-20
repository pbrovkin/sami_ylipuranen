import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "../header"
import Footer from "../footer";
import styles from "./layout.module.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
             menuLinks {
               name
               link
             }
          }
        }
      }
    `}

    render={data => (
      <>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        </Helmet>

        <div className={styles.container}>
          <div className={styles.content}>
            <Header menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title} />
            {children}
          </div>
          <Footer />
        </div>
      </>
    )}
  />
);

export default Layout