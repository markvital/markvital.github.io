import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PortfolioGrid } from "../components/portfolio-grid"


const WorkPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} type={"full"}>
      <Seo
        title="My Works"
        description="Most important works of Mark Vital"
      />
      <p style={{textAlign:"center", color:"grey", fontSize: "1.25em"}}>
        Here is my portfolio:
      </p>
      <PortfolioGrid posts={posts} />
    </Layout>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query {
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
