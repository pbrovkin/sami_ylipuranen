import Blogi from "./blogi"
import { graphql } from 'gatsby'

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
          title
          description
          slug
        }
      }
    }
  }
`