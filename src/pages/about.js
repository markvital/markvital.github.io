import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Seo
        title="About Anna Vital"
        description="Anna Vital is an information designer and infographic author. She applies her visual thinking method in helping people visualize their own ideas, using her infographic making tools."
      />
        <article>
          <header style={{textAlign: "center"}}>
            <h1>About Me</h1>
          </header>
          <p id="intro">
            Anna Vital is founder of Adioma, information designer and a visual journalist.
            She visualizes the lives of people, companies, and ideas.
            Her dream is to create a visual encyclopedia of interconnected infographics.
            Anna holds a Juris Doctor and a Bachelor’s degree in Linguistics.
            She speaks Chinese, English, and Ukrainian.
            She applies her visual thinking method in helping people visualize their own ideas, using her infographic making tool.
          </p>
          <StaticImage
            className="about-cover"
            layout="FULL_WIDTH"
            formats={["jpg"]}
            src="../images/about-cover.jpg"
            quality={95}
            alt="Anna Vital"
          />
          <p id="extended-bio">
            {/* fill out extended bio here */}
          </p>
        </article>
    </Layout>
  )
}

export default AboutPage
