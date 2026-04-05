import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const modules = await prisma.trainingModule.findMany({ orderBy: { code: 'asc' } })
  return NextResponse.json({ modules })
}

export async function POST(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { code, name, description, category, active } = await request.json()
  if (!code?.trim() || !name?.trim() || !category?.trim()) {
    return NextResponse.json({ error: 'Code, name and category are required' }, { status: 400 })
  }

  try {
    const mod = await prisma.trainingModule.create({
      data: { code: code.trim(), name: name.trim(), description: description?.trim() || null, category: category.trim(), active: active ?? true },
    })
    return NextResponse.json({ success: true, module: mod })
  } catch {
    return NextResponse.json({ error: 'Code already exists' }, { status: 409 })
  }
}
