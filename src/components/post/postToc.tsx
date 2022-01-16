import React, { useEffect, useState } from "react"
import "./postToc.scss"
import Col from "react-bootstrap/Col"
import tocbot from "tocbot"
import { bootstrapBreakpoints } from "../../utils/breakpoints"

const tocClassName = "toc"
export const tocContentClassName = "toc-content"

const PostToc = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const isDesktopQuery = window.matchMedia(
      `(min-width: ${bootstrapBreakpoints.xl})`
    ) // 1200px
    setIsDesktop(isDesktopQuery.matches)

    // @ts-ignore
    const updateIsDesktop = e => setIsDesktop(e.matches)
    isDesktopQuery.addEventListener("change", updateIsDesktop)

    if (isDesktop) {
      tocbot.init({
        tocSelector: `.${tocClassName}`,
        contentSelector: `.${tocContentClassName}`,
        headingSelector: "h1, h2, h3",
        hasInnerContainers: true,
        scrollSmooth: false,
      })
    }

    return () => isDesktopQuery.removeEventListener("change", updateIsDesktop)
  }, [isDesktop])

  let toc = null
  if (isDesktop) {
    toc = (
      <Col
        xl={3}
        className="post-toc position-sticky d-none d-xl-flex flex-column justify-content-start p-xl-5"
      >
        <h5 className="toc-header">Contents</h5>
        <div className={tocClassName} />
      </Col>
    )
  }

  return <>{toc}</>
}

export default PostToc
