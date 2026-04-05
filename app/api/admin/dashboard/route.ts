import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [
    totalBookings,
    pendingBookings,
    confirmedBookings,
    totalMessages,
    unreadMessages,
    totalModules,
    activeModules,
    totalSubscribers,
    recentBookings,
    recentMessages,
  ] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { status: 'pending' } }),
    prisma.booking.count({ where: { status: 'confirmed' } }),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: 'unread' } }),
    prisma.trainingModule.count(),
    prisma.trainingModule.count({ where: { active: true } }),
    prisma.subscriber.count(),
    prisma.booking.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
  ])

  return NextResponse.json({
    totalBookings,
    pendingBookings,
    confirmedBookings,
    totalMessages,
    unreadMessages,
    totalModules,
    activeModules,
    inactiveModules: totalModules - activeModules,
    totalSubscribers,
    recentBookings: recentBookings.map(b => ({ ...b, modules: JSON.parse(b.modules) })),
    recentMessages,
  })
}
