import * as React from "react"
import { graphql } from "gatsby"
import * as styles from "./styles/index.module.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PortfolioGrid } from "../components/portfolio-grid"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Anna Vital's website`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Seo title={siteTitle} />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} type="full">
      <Seo title="All posts" />
      <Bio />
      <p className={styles.subHeadline}>Portfolio</p>
      <PortfolioGrid posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbImage {
            childImageSharp {
              gatsbyImageData(layout:FIXED, width: 350, aspectRatio: 1)
            }
          }
        }
      }
    }
  }
`
