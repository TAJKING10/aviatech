import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || 'all'
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 10

  const where = status !== 'all' ? { status } : {}

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.booking.count({ where }),
  ])

  return NextResponse.json({
    bookings: bookings.map(b => ({ ...b, modules: JSON.parse(b.modules) })),
    total,
    page,
    pages: Math.ceil(total / limit),
  })
}
