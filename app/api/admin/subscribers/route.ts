import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 20

  const [subscribers, total] = await Promise.all([
    prisma.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.subscriber.count(),
  ])

  return NextResponse.json({ subscribers, total, page, pages: Math.ceil(total / limit) })
}

export async function DELETE(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await request.json()
  await prisma.subscriber.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
