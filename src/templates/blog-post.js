import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./blog-post.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioProjectTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const {itemImages} = data;
  const itemImagesMap = itemImages.edges.reduce((map, i) => ({ ...map, [i.node.base]: i.node.childImageSharp }), {});
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const coverImage = getImage(post.frontmatter.coverImage)
  const items  = post.frontmatter.items

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        { coverImage &&
          <GatsbyImage image={coverImage} className={styles.cover} />
        }
      </div>
      <article
        className={styles.projectPage}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className={styles.title}>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          {/*<p>{post.frontmatter.date}</p>*/}
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {items && (items.length > 0) &&
        <section id="items" className={styles.items}>
          <h2>Project items</h2>
          <ul>
            {items.map((item, i) => {
              const theImage = itemImagesMap[item.image]
              const itemImage = theImage && getImage(theImage)
              return (
                <li key={i}>
                  <Link to={location.pathname  + item.image.split(".")[0]} title={item.title}>
                    <figure>
                      {itemImage ?
                        <GatsbyImage className={styles.gatsbyImage} image={itemImage}/>
                        :
                        <div className={styles.emptyImage} />
                      }
                      <figcaption>{item.title}</figcaption>
                    </figure>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        }
        <hr />
        <footer>

        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $itemsDir: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        items {
          title
          image
        }
        coverImage {
          childImageSharp {
            gatsbyImageData(layout:FULL_WIDTH)
          }
        }
      }
    }
    itemImages: allFile(filter: {relativeDirectory: {eq: $itemsDir}}) {
      edges {
        node {
          base
          relativeDirectory
          childImageSharp {
            gatsbyImageData(layout:FIXED, width: 300, aspectRatio: 1)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
