import * as styles from "./portfolio-grid.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as React from "react"

export const PortfolioGrid = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const thumbImage = getImage(post.frontmatter.thumbImage)

        return (
          <Link to={post.fields.slug} itemProp="url" key={post.fields.slug}>
            <div className={styles.gridItem}>
              <GatsbyImage className={styles.thumbnail} image={thumbImage}/>
              <h4 className={styles.title}>{title}</h4>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

