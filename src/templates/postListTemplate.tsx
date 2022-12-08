import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostList from "../components/postList/postList"
import { AllMarkdownType, PageContextType } from "../utils/graphqlTypes"

interface PostListTemplateProps {
  data: AllMarkdownType
  pageContext: PageContextType
}

const PostListTemplate = ({ data, pageContext }: PostListTemplateProps) => {
  const postList = data.allMarkdownRemark
  const { currentPage, numPages } = pageContext

  return (
    <Layout activePage="Home">
      <PostList
        postList={postList}
        currentPage={currentPage}
        numPages={numPages}
      />
    </Layout>
  )
}

export default PostListTemplate

export const pageQuery = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: {frontmatter: {date: DESC}}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            categories
            excerpt
          }
        }
      }
    }
  }
`
