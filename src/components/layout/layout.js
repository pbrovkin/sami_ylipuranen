import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from "../header"


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
      <React.Fragment>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        </Helmet>

        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            height: '100%'
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout