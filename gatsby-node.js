const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectItem = path.resolve(`./src/templates/projectItem.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              items {
                image
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      const {slug} = post.fields;
      const items = post.frontmatter.items
      createPage({
        path: slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          itemsDir: withoutSlashes(slug) + "/items"
        },
      })
      items && items.forEach(function(item, i) {
        const getName = fname => fname.split(".")[0];
        const itemSlug = slug + getName(item.image)
        createPage({
          path: itemSlug,
          component: projectItem,
          context: {
            projectId: post.id,
            projectSlug: withoutSlashes(slug),
            fname: item.image,
            filePath: withoutSlashes(slug) + "/items/" + item.image
          },
        })
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const withoutSlashes = text => text.replace(/\//g, ``);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // @TODO: add default values to frontMatter for thumbnails and cover, so each time they don't have to be defined explicitly
  // https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#setting-default-field-values

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
