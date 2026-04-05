import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { sendAdminReply } from '@/lib/email'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await request.json()

  // Handle reply — send email + mark as replied
  if (body.replyText) {
    const message = await prisma.contactMessage.findUnique({ where: { id: parseInt(id) } })
    if (!message) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    try {
      await sendAdminReply({
        toEmail: message.email,
        toName: message.name,
        originalSubject: message.subject,
        replyText: body.replyText,
      })
    } catch (err) {
      console.error('Reply email error:', err)
    }

    const updated = await prisma.contactMessage.update({
      where: { id: parseInt(id) },
      data: { status: 'replied' },
    })
    return NextResponse.json({ success: true, message: updated })
  }

  // Handle status-only update
  const msg = await prisma.contactMessage.update({
    where: { id: parseInt(id) },
    data: { status: body.status },
  })
  return NextResponse.json({ success: true, message: msg })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  await prisma.contactMessage.delete({ where: { id: parseInt(id) } })
  return NextResponse.json({ success: true })
}
