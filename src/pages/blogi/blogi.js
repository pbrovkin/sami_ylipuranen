import React, {useState} from "react"
import {graphql} from "gatsby"
import Layout from "../../components/layout"
import styles from "./blog.module.css";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Button from "../../components/button";
import Sprite from '../../img/sprite.svg'
import imgBlog from '../../img/lakes.jpg'
import Filter from "../../components/filter";
import Subscription from "../../components/subscription/blogsubscription"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from 'gatsby-image';
import SEO from "../../components/seo";



const Blog = ({data, location}) => {
  
  const [filter, setFilter] = useState('');
  
  const posts = data.allContentfulPost.edges
  console.log(data)
  const postsToShow = posts.filter(post => post.node.title.toLowerCase().includes(filter.toLowerCase()))
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };
  
  return (
      <>
        <Layout location={location}>
          <SEO title="Blogi" />
          <div className={styles.blogPage}>
            <div className={`container ${styles.blogContainer}`}>
              <div className={styles.titleBlock}>
                <Title title={'Blogi'} />
              </div>
              <div className={styles.filterBlock}>
                <Filter onChange={handleFilterChange} value={filter} />
              </div>
              <div className={styles.subscrBlock}>
                {/*<Button label={'Subscribe'}/>*/}
                <Subscription/>
              </div>
              <div className={styles.blogBlock}>
                <ul className={styles.list}>
                  {postsToShow.map(({node}) => {
                        const title = node.title || node.slug;
                      
                        return (
                            <li key={node.slug} className={styles.item}>
                              <div className={styles.imgBlock}>
                                <div className={styles.imgContainer}>
                               { node.media ? <img className={styles.blogImg} src={node.media.fluid.srcWebp} alt="post-preview" /> : <img src={imgBlog} alt="post-preview" />} 
                                </div>
                              </div>
                              <div className={styles.entriesBlog}>
                                <div className={styles.timeBlog}>
                                  <svg className={styles.iconClock}>
                                    <use href={Sprite + '#clock'} />
                                  </svg>
                                  <div className={styles.date}>
                                  {node.date}
                                  </div>
                                </div>
                                <div className={styles.subtitleBlock}>
                                  <Subtitle subtitle={title} />
                                </div>
                                <div className={styles.entriesText}>
                                  <p>{node.description}</p>
                                </div>
                                <div className={styles.entriesButton}>
                                  <AniLink fade duration={.5} to={node.slug.toLowerCase()
                                      .replace(/[']/gi, '')
                                      .replace(/ /gi, '-')
                                      .replace(/[,]/gi, '')
                                      .replace(/[ä]/gi, 'a')
                                      .replace(/[ö]/gi, 'o')}>
                                    <Button label={'Lue Lisää'} />
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

