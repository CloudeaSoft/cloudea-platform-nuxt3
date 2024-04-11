import { Renderer, marked, type MarkedOptions } from 'marked'
import { escape, unescape } from 'lodash'

const block = (text: string) => text + '\n\n'
const escapeBlock = (text: string) => escape(text) + '\n\n'
const line = (text: string) => text + '\n'
const inline = (text: string) => text
const newline = () => '\n'
const empty = () => ''

const TxtRenderer: Renderer = {
  // Block elements
  code: escapeBlock,
  blockquote: block,
  html: empty,
  heading: block,
  hr: newline,
  list: (text: string) => block(text.trim()),
  listitem: line,
  checkbox: empty,
  paragraph: block,
  table: (header: string, body: string) => line(header + body),
  tablerow: (text: string) => line(text.trim()),
  tablecell: (text: string) => text + ' ',
  // Inline elements
  strong: inline,
  em: inline,
  codespan: inline,
  br: newline,
  del: inline,
  link: (_0: any, _1: any, text: string) => text,
  image: (_0: any, _1: any, text: string) => text,
  text: inline,
  // etc.
  options: {}
}

/**
 * Converts markdown to plaintext using the marked Markdown library.
 * Accepts [MarkedOptions](https://marked.js.org/using_advanced#options) as
 * the second argument.
 *
 * NOTE: The output of markdownToTxt is NOT sanitized. The output may contain
 * valid HTML, JavaScript, etc. Be sure to sanitize if the output is intended
 * for web use.
 *
 * @param markdown the markdown text to txtify
 * @param options  the marked options
 * @returns the unmarked text
 */
export const markdownToTxt = (
  markdown: string,
  options?: MarkedOptions
): string => {
  const unmarked = marked(markdown, {
    ...options,
    renderer: TxtRenderer
  }).toString()
  const unescaped = unescape(unmarked)
  const trimmed = unescaped.trim()
  return trimmed
}

export default markdownToTxt
