import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostContent from "../components/post/postContent"
import PostToc from "../components/post/postToc"
import { MarkdownType } from "../utils/graphqlTypes"

interface PostTemplateProps {
  data: MarkdownType
  pageContext: any
}

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout activePage="Notes" article={true}>
      <PostContent post={post} previous={previous} next={next} />
      {post.tableOfContents ? <PostToc /> : null}
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
      }
    }
  }
`
