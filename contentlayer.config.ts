
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
  
  export default makeSource({
    contentDirPath: 'src/app/about/content/',
    documentTypes: [Card],
  })