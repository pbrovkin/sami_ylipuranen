import React/*, { useState } */ from "react"
import {Link/*, graphql*/} from "gatsby"
import Layout from "../../components/layout"
// import Filter from "../../components/filter"
import styles from "./blog.module.css";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Button from "../../components/button";
import Sprite from '../../img/sprite.svg'


const Blog = ({data, location}) => {
  
  // const [filter, setFilter] = useState('');
  
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allContentfulPost.edges
  
  // const postsToShow = posts.filter(post => post.node.title.toLowerCase().includes(filter.toLowerCase()))
  
  // const handleFilterChange = (event) => {
  //   setFilter(event.target.value)
  // };
  
  return (
      <>
        <form id="form" className={styles.formBlog}>
          <div className={styles.formBlock}>
            <input className={styles.inputBlog} type="text" placeholder="Search Blog..." />
            <div className={styles.buttonSearch}>
              <svg className={styles.iconMagnifier}>
                <use href={Sprite + '#magnifier'} />
              </svg>
            </div>
          </div>
        </form>
        <Layout>
          <div className={styles.blogPage}>
            <div className={`container ${styles.blogContainer}`}>
              <div className={styles.titleBlock}>
                <Title title={'My Blog'} />
              </div>
              <div className={styles.loginBlock}>
                <Link to="/blogs" className={styles.login}
                    /*activeClassName={styles.activeLogin}*/>Log In</Link>
                <div className={styles.imgBlock}>
                  <svg className={styles.iconLock}>
                    <use href={Sprite + '#lock'} />
                  </svg>
                </div>
              </div>
              <div className={styles.blogBlock}>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <div className={styles.imgBlog}>
                      {/*<img className={styles.blogImg} src={blogImg} alt="img" />*/}
                    </div>
                    <div className={styles.entriesBlog}>
                      <div className={styles.timeBlog}>
                        <svg className={styles.iconClock}>
                          <use href={Sprite + '#clock'} />
                        </svg>
                        <div className={styles.date}>
                          April 13, 2020
                        </div>
                      </div>
                      <div className={styles.subtitleBlock}>
                        <Subtitle subtitle={'Some Blog'} />
                      </div>
                      <div className={styles.entriesText}>
                        <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus eos ipsam, labore
                           nisi placeat possimus repellendus.'</p>
                      </div>
                      <div className={styles.entriesButton}>
                        <Button label={'Reed more'} />
                      </div>
                    </div>
                  </li>
                  
                  {/*{blogs.map((i) => <li key={i.id}*/}
                  {/*                         className={styles.item}>*/}
                  {/*  <div className={styles.subtitleBlock}>*/}
                  {/*    <Subtitle subtitle={i.subtitle} />*/}
                  {/*  </div>*/}
                  {/*  <div className={styles.textBlock}>*/}
                  {/*    <p>{i.serviceText}</p>*/}
                  {/*  </div>*/}
                  {/*  <div className={styles.buttonBlock}>*/}
                  {/*    <Button label={'Reed more'} />*/}
                  {/*  </div>*/}
                  {/*</li>)}*/}
                </ul>
              </div>
            </div>
          </div>
        </Layout>
      </>
  )
};

export default Blog


// /*Styles*/
//
// const Section = {
//   width: '100%',
//   backgroundColor: 'rgba(57, 49, 49, 1)',
//   padding: '80px 2rem 2rem 2rem',
//   fontFamily: 'Montserrat,sans-serif',
//   height: '100%'
// }
// const SectionTitle = {
//   color: '#FFF',
//   fontSize: '3rem',
//   fontWeight: '700',
//   lineHeight: '87px',
//   marginTop: '0',
//   fontFamily: 'Montserrat,sans-serif',
// }
// const BlogTitle = {
//   color: 'rgba(0, 198, 139, 1)',
//   textDecoration: 'none',
//   boxShadow: `none`,
//   fontWeight: '500',
//   textTransform: 'uppercase',
//   fontFamily: 'Montserrat,sans-serif',
// }
// const BlogText = {
//   display: 'block',
//   width: '90%',
//   listStyle: 'none',
//   padding: '1rem',
//   background: '#FFF',
//   transform: 'skew(-10deg)',
//   boxShadow: '4px 4px 9px 0 rgba(0,0,0,0.5)',
//   fontFamily: 'Montserrat,sans-serif',
//   fontWeight: '500'
// }
// const returnLink = {
//   color: 'rgba(0, 198, 139, 1)',
//   fontWeight: '600',
//   fontFamily: 'Montserrat,sans-serif',
// }
// const bottomLinks = {
//   display: 'flex',
//   justifyContent: 'space-between'
// }
//
// /*Component*/
//
// const Blogs = ({ data, location }) => {
//   const [filter, setFilter] = useState('')
//
//   const siteTitle = data.site.siteMetadata.title
//   const posts = data.allContentfulPost.edges
//
//   const postsToShow = posts.filter(post => post.node.title.toLowerCase().includes(filter.toLowerCase()))
//
//   const handleFilterChange = (event) => {
//     setFilter(event.target.value)
//   }
//
//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title="Blogi" />
//       <div style={Section}>
//         <h1 style={SectionTitle}>Blogi</h1>
//         <Filter value={filter} onChange={handleFilterChange} />
//         {postsToShow.map(({ node }) => {
//           const title = node.title || node.slug
//           return (
//             <article key={node.slug}>
//               <header>
//                 <h3 >
//                   <Link style={BlogTitle} to={node.slug}>
//                     {title}
//                   </Link>
//                 </h3>
//               </header>
//               <section>
//                 <p style={BlogText}>{node.description}</p>
//               </section>
//             </article>
//           )
//         })}
//         <div style={bottomLinks}>
//           <Link to="/" style={returnLink}>← Etusivu</Link>
//           <Link to="/contact" style={returnLink}>Yhteistiedot →</Link>
//         </div>
//       </div>
//     </Layout>
//   )
// }
//
// export default Blogs

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulPost {
//       edges {
//         node {
//           date
//           title
//           description
//           slug
//         }
//       }
//     }
//   }
// `
