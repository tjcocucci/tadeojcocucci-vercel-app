
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Card = defineDocumentType(() => ({
    name: 'Card',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      title: {
        type: 'string',
        description: 'The title of the card',
        required: true,
      },
    },
  }))

export const CV = defineDocumentType(() => ({
    name: 'CV',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      title: {
        type: 'string',
        description: 'The title of the card',
        required: true,
      },
      date: {
        type: 'date',
        description: 'Last update',
        required: true,
      },
    },
  }))
  
  export default makeSource({
    contentDirPath: 'src/content/',
    documentTypes: [Card, CV],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: 'one-dark-pro',
            onVisitLine(node : any) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
            onVisitHighlightedLine(node : any) {
              node.properties.className.push('line--highlighted');
            },
            onVisitHighlightedWord(node : any) {
              node.properties.className = ['word--highlighted'];
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    },  
  })