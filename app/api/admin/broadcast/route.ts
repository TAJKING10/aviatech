import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { sendBroadcastToOne } from '@/lib/email'

export async function POST(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { subject, body } = await request.json()
  if (!subject?.trim() || !body?.trim()) {
    return NextResponse.json({ error: 'Subject and body are required' }, { status: 400 })
  }

  const subscribers = await prisma.subscriber.findMany()
  if (subscribers.length === 0) {
    return NextResponse.json({ success: true, sent: 0 })
  }

  let sent = 0
  let failed = 0

  for (const sub of subscribers) {
    try {
      await sendBroadcastToOne({ email: sub.email, subject, body })
      sent++
    } catch (err) {
      console.error(`Failed to send to ${sub.email}:`, err)
      failed++
    }
  }

  return NextResponse.json({ success: true, sent, failed, total: subscribers.length })
}
