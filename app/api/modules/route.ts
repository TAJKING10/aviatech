import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  const modules = await prisma.trainingModule.findMany({
    where: { active: true },
    select: { id: true, code: true, name: true, description: true, category: true },
  })

  const sorted = modules.sort((a, b) => {
    const numA = parseFloat(a.code.replace(/[^0-9.]/g, ''))
    const numB = parseFloat(b.code.replace(/[^0-9.]/g, ''))
    return numA - numB
  })

  return NextResponse.json({ modules: sorted })
}
