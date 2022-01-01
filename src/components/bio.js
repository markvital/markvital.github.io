/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name,
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className={styles.bio}>
      <aside>
        <StaticImage
          className={styles.avatar}
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          height={125}
          quality={95}
          alt={author?.name}
        />
      </aside>
      <div>
        <p className={styles.headline}>Visual Communication</p>
        <p>{author?.summary || null}</p>
      </div>
    </div>
  )
}

export default Bio
