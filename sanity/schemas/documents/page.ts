import { Browser } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: Browser,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    // TODO: Create fields to input slug and sections
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (/^\/.*/.test(slug.current)) return true
          return "Invalid slug - should start with '/'"
        }),
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      validation: (rule) => rule.required(),
      of: [
        { type: 'MainHero' },
        { type: 'CtaBanner' },
        { type: 'FeaturedItems' },
        { type: 'Quote' },
        { type: 'MediaModule' },
      ],
    }),
  ],
  // TODO: BONUS! Configure the preview for this schema to display slug as the title and 'Page' as the subtitle
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
