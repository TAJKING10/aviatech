import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const { code, name, description, category, active } = await request.json()

  const mod = await prisma.trainingModule.update({
    where: { id: parseInt(id) },
    data: {
      ...(code !== undefined && { code: code.trim() }),
      ...(name !== undefined && { name: name.trim() }),
      ...(description !== undefined && { description: description?.trim() || null }),
      ...(category !== undefined && { category: category.trim() }),
      ...(active !== undefined && { active }),
    },
  })
  return NextResponse.json({ success: true, module: mod })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  await prisma.trainingModule.delete({ where: { id: parseInt(id) } })
  return NextResponse.json({ success: true })
}
