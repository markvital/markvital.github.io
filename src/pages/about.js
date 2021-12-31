import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Anna Vital" />
      <h1>About Me</h1>
      <StaticImage
        className="about-cover"
        layout="fixed"
        formats={["jpg"]}
        src="../images/about-cover.jpg"
        width={500}
        quality={95}
        alt="Anna Vital"
      />
      <br />
      <p>
        Anna Vital is founder of Adioma, information designer and a visual journalist.
        She visualizes the lives of people, companies, and ideas.
        Her dream is to create a visual encyclopedia of interconnected infographics.
        Anna holds a Juris Doctor and a Bachelor’s degree in Linguistics.
        She speaks Chinese, English, and Ukrainian.
        She applies her visual thinking method in helping people visualize their own ideas, using her infographic making tool.
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
