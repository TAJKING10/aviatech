import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('admin123', 12)
  const admin = await prisma.adminUser.upsert({
    where: { email: 'admin@aviatech.com' },
    update: {},
    create: {
      email: 'admin@aviatech.com',
      password: hash,
      name: 'Admin',
    },
  })
  console.log(`✓ Admin created: ${admin.email} / admin123`)
  console.log('  Change this password immediately in production!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
