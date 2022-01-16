import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import PostContent from "../components/post/postContent"
import PostToc from "../components/post/postToc"
import { MarkdownType } from "../utils/graphqlTypes"

const About = () => {
  const data: MarkdownType = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { layout: { eq: "page" }, title: { eq: "About" } }
      ) {
        html
        timeToRead
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  `)

  const page = data.markdownRemark

  return (
    <Layout activePage="About">
      <PostContent post={page} />
      <PostToc />
    </Layout>
  )
}

export default About
