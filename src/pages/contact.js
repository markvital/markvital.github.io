import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title="Contact Anna Vital" />
      <Seo
        title="Contact Anna Vital"
        description="Please submit additional details to contact her"
      />
      <h1>Contact Me</h1>
      <p>
        Please fill out the form below to contact me.
      </p>
      <p>
          &lt; not implemented yet &gt;
      </p>
    </Layout>
  )
}

export default AboutPage

