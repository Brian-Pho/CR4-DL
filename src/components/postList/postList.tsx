import React from "react"
import { Link, withPrefix } from "gatsby"
import Col from "react-bootstrap/Col"
import Pagination from "react-bootstrap/Pagination"
import ListGroup from "react-bootstrap/ListGroup"
import { PageContextType, PostListType } from "../../utils/graphqlTypes"
import PostMeta from "../post/postMeta"

interface PostListProps extends PageContextType {
  postList: PostListType
}

const PostListPagination = ({currentPage, numPages}: PageContextType) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const firstPage = ""
  const lastPage = numPages
  const prevPage = currentPage === 2 ? firstPage : currentPage - 1
  const nextPage = currentPage + 1

  return (
    <Pagination className="p-2 p-md-4 mb-0 justify-content-center">
      {!isFirstPage ? (
        <>
          <Pagination.First href={withPrefix(`/${firstPage}`)} />
          <Pagination.Prev href={withPrefix(`/${prevPage}`)} />
          <Pagination.Item href={withPrefix(`/${prevPage}`)}>
            {prevPage === firstPage ? "1" : prevPage}
          </Pagination.Item>
        </>
      ) : null}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {!isLastPage ? (
        <>
          <Pagination.Item href={withPrefix(`/${nextPage}`)}>
            {nextPage}
          </Pagination.Item>
          <Pagination.Next href={withPrefix(`/${nextPage}`)} />
          <Pagination.Last href={withPrefix(`/${lastPage}`)} />
        </>
      ) : null}
    </Pagination>
  )
}

const PostList = ({ postList, currentPage, numPages }: PostListProps) => {
  const posts = postList.edges

  return (
    <Col xl={6} md={9} xs={12} className="p-md-4">
      <ListGroup variant="flush">
        {posts.map(({ node }, index) => {
          const post = node

          return (
            <ListGroup.Item key={index} className="p-2 p-md-4">
              <h3>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h3>
              {post.frontmatter.excerpt}
              <br />
              <PostMeta post={post} />
            </ListGroup.Item>
          )
        })}
      </ListGroup>
      <PostListPagination currentPage={currentPage} numPages={numPages} />
    </Col>
  )
}

export default PostList
