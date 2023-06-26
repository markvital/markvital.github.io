import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Seo
        title="About Mark Vital"
        description="Mark Vital is an information designer and programmer."
      />
        <article>
          <header style={{textAlign: "center"}}>
            <h1>About Me</h1>
          </header>
          <p id="intro">
            <p>
              I'm a full stack developer with an eye for user interfaces and a sense of usability. 
              I have worked in large corporations for half of my career and in a startups later on. I feel like I have now combined both the professionalism of working on advanced products with the hacker mindset of a startup. I lean towards using open-sources frameworks and tools to achieve fast results.
            </p>
            <p>
              Besides the software development my passion is an information design. Together with <a href="http://twitter.com/annavitals">@annavital</a> we created multiple <a href="https://blog.adioma.com">infographics</a> and a data visualization tool.
            </p>
         </p>
          <StaticImage
            className="about-cover"
            layout="FULL_WIDTH"
            formats={["jpg"]}
            src="../images/about-cover.jpg"
            quality={95}
            alt="Mark Vital"
          />
          <p id="extended-bio">
            {/* fill out extended bio here */}
          </p>
        </article>
    </Layout>
  )
}

export default AboutPage
