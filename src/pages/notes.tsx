import React from "react"
import Nav from "react-bootstrap/Nav"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"
import Tab from "react-bootstrap/Tab"
import PostCategory from "../components/postCategory/postCategory"
import { graphql, useStaticQuery } from "gatsby"
import { AllMarkdownType } from "../utils/graphqlTypes"

const NOTE_CATEGORIES = ["Books", "Textbooks", "Papers", "Courses", "Other"]

const Notes = () => {
  const data: AllMarkdownType = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 2000
        sort: {frontmatter: {date: DESC}}
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              categories
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Create mapping of category to posts
  const categoryToPost = new Map()
  for (const category of NOTE_CATEGORIES) {
    categoryToPost.set(category, [])
  }

  // Filter posts by their category
  const posts = data.allMarkdownRemark.edges
  for (const post of posts) {
    if (!post.node.frontmatter.categories) {
      continue
    }

    for (const postCategory of post.node.frontmatter.categories) {
      let defaultCategory = "Other"
      const filteredPosts = categoryToPost.get(postCategory)

      if (filteredPosts !== undefined) {
        defaultCategory = postCategory
      }
      categoryToPost.get(defaultCategory).push(post)
    }
  }

  return (
    <Layout activePage="Notes">
      <Col xl={6} md={9} xs={12} className="p-md-4 p-xl-5">
        <h1>Notes</h1>
        <Tab.Container defaultActiveKey={NOTE_CATEGORIES[0]}>
          <Nav justify variant="pills">
            {NOTE_CATEGORIES.map((category, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={category}>{category}</Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
          <Tab.Content>
            {NOTE_CATEGORIES.map((category, index) => {
              return (
                <Tab.Pane key={index} eventKey={category}>
                  <PostCategory posts={categoryToPost.get(category)} />
                </Tab.Pane>
              )
            })}
          </Tab.Content>
        </Tab.Container>
      </Col>
    </Layout>
  )
}

export default Notes
