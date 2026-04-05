import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

const DEFAULT_SETTINGS: Record<string, string> = {
  brandName: 'Aviatech Consulting',
  brandTagline: 'Engineering High-Altitude Solutions',
  supportEmail: 'info@aviatech-consulting.com',
  phone: '',
  heroHeadline: 'Elevating Aerospace Standards Through Precision Consulting.',
  heroSubheadline: 'We bridge the gap between complex aeronautical regulations and operational excellence, providing world-class audits and training modules for the next generation of flight.',
  heroPrimaryCta: 'Explore Operations',
  heroSecondaryCta: 'Book Training',
}

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const rows = await prisma.siteSetting.findMany()
  const settings: Record<string, string> = { ...DEFAULT_SETTINGS }
  for (const row of rows) {
    settings[row.key] = row.value
  }

  return NextResponse.json({ settings })
}

export async function POST(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body: Record<string, string> = await request.json()

  await Promise.all(
    Object.entries(body).map(([key, value]) =>
      prisma.siteSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      })
    )
  )

  return NextResponse.json({ success: true })
}
