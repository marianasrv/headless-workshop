import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MediaModule',
  title: 'Media Module',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      title: 'Cta',
      type: 'Cta',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'imageOnRight',
      title: 'Image on Right',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string',
    }),
    defineField({
      name: 'isDark',
      title: 'is Dark',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Media Module',
        media,
        title,
      }
    },
  },
})
