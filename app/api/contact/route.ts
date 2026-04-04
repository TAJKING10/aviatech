import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactConfirmation, sendContactNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const msg = await prisma.contactMessage.create({
      data: { name, email, subject, message, status: 'unread' },
    })

    Promise.all([
      sendContactConfirmation({ email, name, subject }),
      sendContactNotification({ name, email, subject, message }),
    ]).catch((err) => console.error('Email error:', err))

    return NextResponse.json({ success: true, id: msg.id })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
