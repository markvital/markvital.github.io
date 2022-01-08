import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./projectItem.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectItemTemplate = ({ data, location, pageContext }) => {
  const {project, itemImage} = data;
  const {items, title:projectTitle} = project.frontmatter;
  const {fname, projectSlug} = pageContext;
  const projectItem = items && items.find(item => item.image === fname); //@TODO
  const projectItemImage = getImage(itemImage);

  return (
    <Layout location={location} title={projectItem.title + " - Anna Vital"}>
      <Seo
        title={projectItem.title}
        description={projectItem.description}
      />
      <article
        className={styles.itemPage}
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className={styles.backLink}>
          <Link to={"/" + projectSlug + "/#items"} title={"Back to " + projectTitle}>◀ Back to {projectTitle}</Link>
        </div>
        <section>
          <div>
            <GatsbyImage image={projectItemImage} className={styles.itemImage} />
          </div>
          <header className={styles.title}>
            <h1 itemProp="headline">{projectItem.title}</h1>
          </header>
          <p>
            {projectItem.description}
          </p>
        </section>

        <footer>

        </footer>
      </article>
    </Layout>
  )
}

export default ProjectItemTemplate

export const pageQuery = graphql`
query ProjectItById(
  $projectId: String!
  $filePath: String!
)  {
  site {
    siteMetadata {
      title
    }
  }
  project:markdownRemark(id: { eq: $projectId } ) {
    frontmatter {
      title
      items {
        title
        description
        image
      }
    }
  }
  itemImage:file(relativePath : { eq: $filePath }) {
    childImageSharp {
      gatsbyImageData(layout:FULL_WIDTH)
    }
  }
}
`
