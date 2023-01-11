import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as styles from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, children, type }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const header = (
    <div className={styles.header}>
      <nav className={styles.menu}>
        <Link className={styles.logo} to="/">
          <StaticImage
            className={styles.avatar}
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={35}
            height={35}
            quality={95}
            alt={author?.name}
          />
          <span>{author?.name}</span>
        </Link>
        <Link className={styles.menuItem} to="/about">about</Link>
        <Link className={styles.menuItem} to="/work">works</Link>
        <Link className={`${styles.menuItem} hidden-xs`} to="/contact">contact</Link>
        <a className={styles.social} aria-label="Twitter" href={`https://twitter.com/${social?.twitter || ``}`}> </a>
      </nav>
    </div>
  )

/*
  if (isRootPath) {
    // show only on homepage
  } else {
  }
*/

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className={type === "full" ? styles.pageFull : styles.pageColumn}>{children}</main>
      <footer className={styles.footer}>
        {author?.name} © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
