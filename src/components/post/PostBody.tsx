import { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import TableOfContents from './TableOfContents'
import useRenderRichText from '../../hooks/useRenderRichText'

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  font-size: 16px;

  blockquote {
    padding: 5px 15px;
    border-left: 3px solid rgba(30, 31, 32, 0.5);
    margin: 20px 0;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  hr {
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin: 80px 0;
  }

  p {
    padding: 3px 0;
    word-break: break-word;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // pre[class*='language-'] {
  //   margin: 30px 0;
  //   padding: 15px;
  //   font-size: 15px;
  //   tab-size: 2;

  //   ::-webkit-scrollbar-thumb {
  //     background: rgba(255, 255, 255, 0.5);
  //     border-radius: 3px;
  //   }
  // }

  // @media (max-width: 768px) {
  //   line-height: 1.6;
  //   font-size: 14px;
  // }
`

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  useEffect(() => Prism.highlightAll(), [])

  return (
    <Wrapper>
      <Content id="content">{richText}</Content>
      <TableOfContents content={content} />
    </Wrapper>
  )
}
