import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await request.json()
  const updateData: Record<string, string> = {}
  if (body.status) updateData.status = body.status
  if (body.modules) updateData.modules = JSON.stringify(body.modules)

  const booking = await prisma.booking.update({
    where: { id: parseInt(id) },
    data: updateData,
  })
  return NextResponse.json({ success: true, booking })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  await prisma.booking.delete({ where: { id: parseInt(id) } })
  return NextResponse.json({ success: true })
}
