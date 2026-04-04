import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendBookingConfirmation, sendBookingNotification } from '@/lib/email'

function generateRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let part1 = ''
  let part2 = ''
  for (let i = 0; i < 3; i++) part1 += chars[Math.floor(Math.random() * chars.length)]
  for (let i = 0; i < 2; i++) part2 += chars[Math.floor(Math.random() * chars.length)]
  return `AV-${part1}-${part2}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName, surname, email, phone,
      dateOfBirth, placeOfBirth, nationality, company, notes,
      category, trainingPath, modules,
    } = body

    if (!firstName || !surname || !email || !phone || !category || !trainingPath || !modules?.length) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    let referenceNo = generateRef()
    // ensure uniqueness
    let exists = await prisma.booking.findUnique({ where: { referenceNo } })
    while (exists) {
      referenceNo = generateRef()
      exists = await prisma.booking.findUnique({ where: { referenceNo } })
    }

    const booking = await prisma.booking.create({
      data: {
        referenceNo,
        firstName,
        surname,
        email,
        phone,
        dateOfBirth: dateOfBirth || null,
        placeOfBirth: placeOfBirth || null,
        nationality: nationality || null,
        company: company || null,
        notes: notes || null,
        category,
        trainingPath,
        modules: JSON.stringify(modules),
        status: 'pending',
      },
    })

    // Send emails after saving — don't fail the booking if email fails
    Promise.all([
      sendBookingConfirmation({ email, firstName, surname, referenceNo, category, trainingPath, modules }),
      sendBookingNotification({ firstName, surname, email, phone, referenceNo, category, trainingPath, modules, dateOfBirth, placeOfBirth, nationality, company, notes }),
    ]).catch((err) => console.error('Email error:', err))

    return NextResponse.json({ success: true, referenceNo: booking.referenceNo })
  } catch (error) {
    console.error('Booking route error:', error)
    return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 })
  }
}
