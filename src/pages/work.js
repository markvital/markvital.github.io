import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const WorkPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Anna Vital works" />
      <h1>My Work</h1>
      <p>Here is a collection of my work:</p>
      <p>&lt; not implemented yet &gt;</p>
    </Layout>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
