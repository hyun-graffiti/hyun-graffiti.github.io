import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type CodeProps = {
  isBlock?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLElement>

const Inline = styled.code`
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Nanum Gothic Coding', monospace !important;
  background: #f1f3f5;
`

const Block = styled.pre`
  & * {
    font-family: 'Nanum Gothic Coding', monospace !important;
  }
`

export default function Code({
  isBlock = false,
  children,
  ...props
}: CodeProps) {
  if (!isBlock) return <Inline {...props}>{children}</Inline>
  else
    return (
      <Block>
        <code {...props}>{children}</code>
      </Block>
    )
}
