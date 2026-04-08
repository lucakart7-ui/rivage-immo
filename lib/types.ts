export type Commune = 'hyeres' | 'carqueiranne' | 'la-londe' | 'bormes' | 'toulon' | 'le-pradet' | 'la-valette' | 'le-lavandou' | 'la-crau' | 'la-garde' | 'sollies-pont' | 'var'
export type BienStatus = 'disponible' | 'vendu' | 'compromis'
export type BienType = 'maison' | 'villa' | 'appartement' | 'terrain'

export interface Bien {
  _id: string
  title: string
  slug: { current: string }
  status: BienStatus
  type: BienType
  commune: Commune
  prix: number
  surface: number
  pieces: number
  chambres: number
  description_fr: string
  description_en?: string
  photos: SanityImage[]
  featured: boolean
  ordre_affichage: number
  meta_title?: string
  meta_description?: string
}

export interface SanityImage {
  _key: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface MembreEquipe {
  _id: string
  nom: string
  role: string
  bio_fr?: string
  photo?: SanityImage
  ordre: number
}

export const COMMUNE_LABELS: Record<Commune, string> = {
  hyeres: 'Hyères',
  carqueiranne: 'Carqueiranne',
  'la-londe': 'La Londe-les-Maures',
  bormes: 'Bormes-les-Mimosas',
  toulon: 'Toulon',
  'le-pradet': 'Le Pradet',
  'la-valette': 'La Valette',
  'le-lavandou': 'Le Lavandou',
  'la-crau': 'La Crau',
  'la-garde': 'La Garde',
  'sollies-pont': 'Solliès-Pont',
  var: 'Var',
}
