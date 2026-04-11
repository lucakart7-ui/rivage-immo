import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const slug = body?.result?.slug?.current

    // Revalidate la page du bien spécifique si on a le slug
    if (slug) {
      revalidatePath(`/bien/${slug}`)
    }

    // Toujours revalider les listes
    revalidatePath('/biens')
    revalidatePath('/')

    return NextResponse.json({ revalidated: true, slug: slug || 'all' })
  } catch {
    return NextResponse.json({ revalidated: true, slug: 'all' })
  }
}
