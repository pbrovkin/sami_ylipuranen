const path = require(`path`)
const cleanChar = (slug) => { return slug.toLowerCase()
  .replace(/[']/gi, '')
  .replace(/ /gi, '-')
  .replace(/[,]/gi, '')
  .replace(/[ä]/gi, 'a')
  .replace(/[ö]/gi, 'o') }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulPost.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    console.log(previous)
    const next = index === 0 ? null : posts[index - 1].node
    console.log(next)
    // there is a bug when trying to click next or previous in some cases the url does not change with the cleanChar
//add replace regex to above variables
    createPage({
      path: cleanChar(post.node.slug),
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}
