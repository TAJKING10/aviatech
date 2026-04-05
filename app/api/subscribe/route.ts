import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendSubscriberConfirmation, sendSubscriberNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Check if already subscribed
    const existing = await prisma.subscriber.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ success: true, alreadySubscribed: true })
    }

    await prisma.subscriber.create({ data: { email } })

    try {
      await Promise.all([
        sendSubscriberConfirmation({ email }),
        sendSubscriberNotification({ email }),
      ])
      console.log('Subscriber emails sent to:', email)
    } catch (emailErr) {
      console.error('Subscriber email error:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe route error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
