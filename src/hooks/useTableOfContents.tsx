import { useState, useMemo, useEffect } from 'react'

type ContentType = {
  content: {
    content: {
      data: unknown
      marks: unknown
      nodeType: string
      value: string
    }[]
    nodeType: string
  }[]
  nodeType: string
}

export default function useTableOfContents(rawContent: string) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toc = useMemo(() => {
    const { content } = JSON.parse(rawContent) as ContentType
    const headers = content.filter(item => item.nodeType.startsWith('heading-'))
    const minDepth = Math.min(
      ...headers.map(({ nodeType }) =>
        parseInt(nodeType.charAt(nodeType.length - 1)),
      ),
    )

    return headers.map(({ nodeType, content }) => {
      const title = content[0].value
      const id = title.replaceAll(' ', '-')
      const depth = parseInt(nodeType.charAt(nodeType.length - 1)) - minDepth

      return { id, title, depth }
    })
  }, [rawContent])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        setActiveId(prevId => {
          if (entries[0].boundingClientRect.top < 0) return entries[0].target.id
          else {
            const index = toc.findIndex(({ id }) => id === prevId)

            if (index > 0) return toc[index - 1].id
            else return null
          }
        }),
      { rootMargin: '0% 0px -100% 0px' },
    )

    document
      .querySelectorAll('#content > h1, h2, h3, h4, h5, h6')
      .forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [toc])

  return { toc, activeId }
}
