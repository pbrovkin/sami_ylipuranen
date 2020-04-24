import React, { useState }  from "react"
import {graphql} from "gatsby"
import Layout from "../../components/layout"
import styles from "./blog.module.css";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Button from "../../components/button";
import Sprite from '../../img/sprite.svg'
import imgBlog from '../../img/blog-block-left.png'
import Filter from "../../components/filter";
import Subscription from "../../components/subscription/blogSubscription"


const Blogi = ({data, location}) => {
  
  const [filter, setFilter] = useState('');
  
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allContentfulPost.edges
  
  const post = [
    {
      id: 1,
      title: '1Some Blog',
      descText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus eos ipsam, laborenisi placeat possimus repellendus'
    },
    {
      id: 2,
      title: '2Some Blog',
      descText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus eos ipsam, laborenisi placeat possimus repellendus'
    },
    {
      id: 3,
      title: '3Some Blog3',
      descText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus eos ipsam, laborenisi placeat possimus repellendus'
    },
    {
      id: 4,
      title: 'Some Blog4',
      descText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus eos ipsam, laborenisi placeat possimus repellendus'
    },
  ];
  
  const postsToShow = post.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };
  
  
  
  return (
      <>
        <Layout>
          <div className={styles.blogPage}>
            <div className={`container ${styles.blogContainer}`}>
              <div className={styles.titleBlock}>
                <Title title={'Blogi'} />
              </div>
              <Subscription/>
              <div className={styles.blogBlock}>
              <Filter onChange={handleFilterChange} value={filter}/>
                <ul className={styles.list}>
                  {postsToShow.map(i => <li key={i.id} className={styles.item}>
                        <div className={styles.imgBlog}>
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
                            <Subtitle subtitle={i.title} />
                          </div>
                          <div className={styles.entriesText}>
                            <p>{i.descText}</p>
                          </div>
                          <div className={styles.entriesButton}>
                            <Button label={'Lue lisää'} />
                          </div>
                        </div>
                      </li>
                  )}
                </ul>
              </div>
        
            </div>
          </div>
        </Layout>
      </>
  )
};

export default Blogi

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

