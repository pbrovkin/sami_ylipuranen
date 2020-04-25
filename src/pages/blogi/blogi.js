import React, {useState} from "react"
import {graphql} from "gatsby"
import Layout from "../../components/layout"
import styles from "./blog.module.css";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Button from "../../components/button";
import Sprite from '../../img/sprite.svg'
import imgBlog from '../../img/blog-block-left.png'
import Filter from "../../components/filter";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Subscription from "../../components/subscription/blogsubscription"


const Blog = ({data, location}) => {
  
  const [filter, setFilter] = useState('');
  
  const posts = data.allContentfulPost.edges
  
  const postsToShow = posts.filter(post => post.node.title.toLowerCase().includes(filter.toLowerCase()))
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };
  
  
  return (
      <>
        <Layout location={location}>
          <div className={styles.blogPage}>
            <div className={`container ${styles.blogContainer}`}>
              <div className={styles.titleBlock}>
                <Title title={'My Blog'} />
              </div>
              <div className={styles.filterBlock}>
                <Filter onChange={handleFilterChange} value={filter} />
              </div>
              <div className={styles.subscrBlock}>
                {/*<Button label={'Subscribe'}/>*/}
              </div>
              <Subscription/>
              <div className={styles.blogBlock}>
                <ul className={styles.list}>
                  {postsToShow.map(({node}) => {
                        const title = node.title || node.slug;
                        
                        return (
                            <li key={node.slug} className={styles.item}>
                              <div className={styles.imgBlock}>
                                <div className={styles.imgContainer}>
                                  <img className={styles.blogImg} src={imgBlog} alt="img" />
                                </div>
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
                                  <Subtitle subtitle={title} />
                                </div>
                                <div className={styles.entriesText}>
                                  <p>{node.description}</p>
                                </div>
                                <div className={styles.entriesButton}>
                                  <AniLink cover bg='#00C68B' duration={.8} direction='top' to={node.slug}>
                                    <Button label={'Reed more'} />
                                  </AniLink>
                                </div>
                              </div>
                            </li>
                        )
                      }
                  )}
                </ul>
              </div>
        
            </div>
          </div>
        </Layout>
      </>
  )
};

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          date
          title
          description
          slug
        }
      }
    }
  }
`