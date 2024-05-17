import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode } from 'react'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: ReactNode
}

const METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "thumbnail" }) {
      publicURL
    }
  }
`

export default function SEO({
  title,
  description,
  pathname,
  image,
  children,
}: SEOProps) {
  const {
    site: { siteMetadata },
    file: { publicURL: defaultImage },
  } = useStaticQuery(METADATA_QUERY)

  const defaultMetadata = {
    title: title ?? siteMetadata.title,
    description: description ?? siteMetadata.description,
    siteUrl: `${siteMetadata.siteUrl}${pathname ?? ''}`,
    image: `${siteMetadata.siteUrl}${image ?? defaultImage}`,
  }

  return (
    <>
      <title>{defaultMetadata.title}</title>

      <html lang="ko" />
      <meta name="description" content={defaultMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultMetadata.image} />
      <meta property="og:url" content={defaultMetadata.siteUrl} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={defaultMetadata.title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultMetadata.image} />
      <meta name="twitter:site" content="@사용자이름" />
      <meta name="twitter:creator" content="@사용자이름" />

      {/* <meta
          name="google-site-verification"
          content="웹 마스터 도구가 제공하는 Meta 태그"
        />
        <meta
          name="naver-site-verification"
          content="웹 마스터 도구가 제공하는 Meta 태그"
        /> */}

      {children}
    </>
  )
}
