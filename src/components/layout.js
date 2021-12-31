import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <div>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      &nbsp; &nbsp;
      <Link className="header-link-home" to="/about">
        about
      </Link>
      &nbsp; &nbsp;
      <Link className="header-link-home" to="/work">
        works
      </Link>
      &nbsp; &nbsp;
      <Link className="header-link-home" to="/contact">
        contact
      </Link>
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
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
