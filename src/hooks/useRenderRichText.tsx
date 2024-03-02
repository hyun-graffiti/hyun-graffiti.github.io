import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from 'gatsby-source-contentful/rich-text'
import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, Text } from '@contentful/rich-text-types'
import { getImage } from 'gatsby-plugin-image'
import Heading from '../components/post/Heading'
import Image from '../components/post/Image'
import Code from '../components/post/Code'

const HEADERS = [BLOCKS.HEADING_1, BLOCKS.HEADING_2, BLOCKS.HEADING_3] as const
const CODE_METADATA_REGEX = /^language::(\w+)/

const options: Options = {
  renderMark: {
    [MARKS.CODE]: text => {
      const isBlock = !!text && CODE_METADATA_REGEX.test(text.toString())

      if (!isBlock) return <Code isBlock={isBlock}>{text}</Code>
      else {
        const language = CODE_METADATA_REGEX.exec(text.toString())?.[1]

        return (
          <Code isBlock={isBlock} className={`language-${language}`}>
            {text.toString().split('\n').slice(1).join('\n')}
          </Code>
        )
      }
    },
  },
  renderNode: {
    ...HEADERS.reduce<{ [block: string]: NodeRenderer }>((nodes, header) => {
      nodes[header] = (node, children) => {
        const id = (node.content[0] as Text).value.replaceAll(' ', '-')

        return (
          <Heading type={header} props={{ id }}>
            {children}
          </Heading>
        )
      }

      return nodes
    }, {}),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData, description } = node.data.target
      const image = getImage(gatsbyImageData)

      if (image) return <Image image={image} alt={description} />
    },
  },
}

export default function useRenderRichText({
  raw,
  references,
}: Queries.ContentfulPostContent) {
  if (!raw) return null

  return renderRichText(
    {
      raw,
      references: references as unknown as ContentfulRichTextGatsbyReference[],
    },
    options,
  )
}
