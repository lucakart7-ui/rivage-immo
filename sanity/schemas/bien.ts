import { defineField, defineType } from 'sanity'

export const bienSchema = defineType({
  name: 'bien',
  title: 'Bien immobilier',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible', value: 'disponible' },
          { title: 'Vendu', value: 'vendu' },
          { title: 'Compromis', value: 'compromis' },
        ],
        layout: 'radio',
      },
      initialValue: 'disponible',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type de bien',
      type: 'string',
      options: {
        list: [
          { title: 'Maison', value: 'maison' },
          { title: 'Villa', value: 'villa' },
          { title: 'Appartement', value: 'appartement' },
          { title: 'Terrain', value: 'terrain' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'commune',
      title: 'Commune',
      type: 'string',
      options: {
        list: [
          { title: 'Hyères', value: 'hyeres' },
          { title: 'Carqueiranne', value: 'carqueiranne' },
          { title: 'La Londe-les-Maures', value: 'la-londe' },
          { title: 'Bormes-les-Mimosas', value: 'bormes' },
          { title: 'Toulon', value: 'toulon' },
          { title: 'Le Pradet', value: 'le-pradet' },
          { title: 'La Valette', value: 'la-valette' },
          { title: 'Le Lavandou', value: 'le-lavandou' },
          { title: 'La Crau', value: 'la-crau' },
          { title: 'La Garde', value: 'la-garde' },
          { title: 'Solliès-Pont', value: 'sollies-pont' },
          { title: 'Var', value: 'var' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prix',
      title: 'Prix (€)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'surface',
      title: 'Surface (m²)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'pieces',
      title: 'Nombre de pièces',
      type: 'number',
    }),
    defineField({
      name: 'chambres',
      title: 'Nombre de chambres',
      type: 'number',
    }),
    defineField({
      name: 'description_fr',
      title: 'Description (français)',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'description_en',
      title: 'Description courte (English — 3 lines max)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texte alternatif',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'exclusivite',
      title: 'Exclusivité',
      type: 'boolean',
      initialValue: false,
      description: 'Affiche un bandeau "Exclusivité" sur la carte du bien',
    }),
    defineField({
      name: 'featured',
      title: 'Mis en avant (home)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ordre_affichage',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 99,
    }),
    defineField({
      name: 'meta_title',
      title: 'SEO — Titre (override)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'meta_description',
      title: 'SEO — Description (override)',
      type: 'text',
      rows: 2,
      group: 'seo',
    }),
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  preview: {
    select: {
      title: 'title',
      commune: 'commune',
      status: 'status',
      prix: 'prix',
      media: 'photos.0',
    },
    prepare({ title, commune, status, prix, media }) {
      const communes: Record<string, string> = {
        hyeres: 'Hyères',
        carqueiranne: 'Carqueiranne',
        'la-londe': 'La Londe',
        bormes: 'Bormes',
        toulon: 'Toulon',
        'le-pradet': 'Le Pradet',
        'la-valette': 'La Valette',
        'le-lavandou': 'Le Lavandou',
        'la-crau': 'La Crau',
        'la-garde': 'La Garde',
        'sollies-pont': 'Solliès-Pont',
        var: 'Var',
      }
      return {
        title,
        subtitle: `${communes[commune] || commune} · ${prix ? `${prix.toLocaleString('fr-FR')} €` : '—'} · ${status}`,
        media,
      }
    },
  },
})
