import React from "react"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadataType } from "../../utils/graphqlTypes"

interface SEOProps {
  customTitle?: string
  customDesc?: string
  isArticle?: boolean
}

interface HeadProps {
  seo: {
    title: string
    description: string
    url: string
    type: string
  }
}

const SEO = ({ customTitle, customDesc, isArticle }: SEOProps) => {
  const { pathname } = useLocation()
  const { site }: SiteMetadataType = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const { title, description, siteUrl } = site.siteMetadata

  const seo = {
    title: customTitle || title,
    description: customDesc || description,
    url: `${siteUrl}${pathname}`,
    type: isArticle ? "article" : "website",
  }

  return (
    <Head seo={seo}/>
  )
}

export default SEO

SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}

const Head = ({seo}: HeadProps) => {
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      <meta name="og:title" content={seo.title}/>
      <meta name="og:description" content={seo.description}/>
      <meta name="og:url" content={seo.url}/>
      <meta name="og:type" content={seo.type}/>
    </>
  )
}
