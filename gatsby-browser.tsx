import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/common/Layout'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-typescript'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
