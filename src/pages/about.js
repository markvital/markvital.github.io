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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
