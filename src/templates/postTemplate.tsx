import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostContent from "../components/post/postContent"
import PostToc from "../components/post/postToc"

interface PostTemplateProps {
  data: {
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      tableOfContents: string
      frontmatter: {
        title: string
        date: string
        categories: string[]
      }
      headings: {
        id: string
        value: string
      }[]
    }
  }
  pageContext: any
}

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout activePage="Notes">
      <PostContent post={post} previous={previous} next={next} />
      {post.tableOfContents ? (
        <PostToc toc={post.tableOfContents} headings={post.headings} />
      ) : null}
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents(absolute: false)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
      }
      headings {
        id
        value
      }
    }
  }
`
