import React from "react"
import { graphql, Link, useStaticQuery, withPrefix } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import "./sidebar.scss"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import { SiteMetadataType } from "../../utils/graphqlTypes"

const SIDEBAR_ICON_SIZE = "lg"

interface SidebarProps {
  activePage: string
}

interface SidebarContactProps {
  author: {
    github: string
  }
}

const SidebarContact = (props: SidebarContactProps) => {
  return (
    <div className="nav-buttons d-none d-md-flex justify-content-around w-100 mt-4 mb-4">
      <a title="github" href={`https://github.com/${props.author.github}`}>
        <FontAwesomeIcon icon={faGithub} size={SIDEBAR_ICON_SIZE} />
      </a>
      <a title="email" href="mailto:brainic777@gmail.com">
        <FontAwesomeIcon icon={faAt} size={SIDEBAR_ICON_SIZE} />
      </a>
    </div>
  )
}

const Sidebar = (props: SidebarProps) => {
  const { site }: SiteMetadataType = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          menu {
            label
            path
          }
          author {
            name
            github
          }
        }
      }
    }
  `)

  const { title, description, menu, author } = site.siteMetadata

  return (
    <Col
      md={3}
      xs={12}
      className="sidebar d-flex flex-md-column position-sticky ps-3 pe-3 p-md-4 p-xl-5"
    >
      <Navbar
        className="align-items-start flex-md-column w-100"
        expand="md"
        // @ts-ignore
        variant="none"
        bg="sidebar"
      >
        <Navbar.Brand className="p-md-0">
          <Link to="/">{title}</Link>
        </Navbar.Brand>
        <Navbar.Text className="d-none d-lg-inline-block mb-xl-3 p-0">
          {description}
        </Navbar.Text>
        <div className="navbar-light d-inline-block">
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="w-100">
          <Nav
            variant="pills"
            defaultActiveKey={withPrefix(props.activePage)}
            className="flex-column w-100"
          >
            {menu.map((item, index) => {
              return (
                <Nav.Link
                  href={withPrefix(item.path)}
                  key={index}
                  className="mt-1 mb-1 mt-md-2 mb-md-2"
                >
                  {item.label}
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
        <SidebarContact author={author} />
      </Navbar>
    </Col>
  )
}

export default Sidebar
