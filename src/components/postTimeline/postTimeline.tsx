import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./postTimeline.scss"
import { AllMarkdownType, PostType } from "../../utils/graphqlTypes"

interface YearProps {
  year: string
  posts: {
    node: PostType
  }[]
}

const Year = ({ year, posts }: YearProps) => {
  return (
    <section className="year">
      <h3>{year}</h3>
      <section>
        {posts.map((post, index) => {
          return (
            <ul key={index}>
              <li>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            </ul>
          )
        })}
      </section>
    </section>
  )
}

const PostTimeline = () => {
  const data: AllMarkdownType = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "post" } } }
        sort: {frontmatter: {date: DESC}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY")
              categories
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  // Create mapping of years to posts within that year
  const yearToPost = new Map()
  const postYears = posts.map(post => {
    return post.node.frontmatter.date
  })
  const years = Array.from(new Set(postYears))
  for (const year of years) {
    yearToPost.set(year, [])
  }

  // Filter all posts and add them to their respective year
  for (const post of posts) {
    const postYear = post.node.frontmatter.date
    if (!postYear) {
      continue
    }

    yearToPost.get(postYear).push(post)
  }

  return (
    <div className="timeline position-relative m-2 m-md-4">
      {years.map((year, index) => {
        return <Year year={year} posts={yearToPost.get(year)} key={index} />
      })}
    </div>
  )
}

export default PostTimeline
