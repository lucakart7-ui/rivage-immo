import { defineField, defineType } from 'sanity'

export const equipeSchema = defineType({
  name: 'equipe',
  title: "Équipe",
  type: 'document',
  fields: [
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio_fr',
      title: 'Bio (français — 2 lignes max)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'nom',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
