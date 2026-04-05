import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const modules = [
  { code: 'M1',   name: 'M1 Mathematics',                                              description: 'Arithmetic, Algebra, Geometry and Calculus fundamentals.',                                category: 'B1.1, B1.2, B2' },
  { code: 'M2',   name: 'M2 Physics',                                                  description: 'Statics, Kinetics, Thermodynamics, and Fluid Dynamics.',                                  category: 'B1.1, B1.2, B2' },
  { code: 'M3',   name: 'M3 Electrical Fundamentals',                                  description: 'Electron theory, DC and AC circuits, resistors, capacitors and inductors.',                category: 'B1.1, B1.2, B2' },
  { code: 'M4',   name: 'M4 Electronic Fundamentals',                                  description: 'Semiconductors, diodes, transistors and integrated circuits.',                             category: 'B1.1, B1.2, B2' },
  { code: 'M5',   name: 'M5 Digital Techniques / Electronic Instrument Systems',       description: 'Number systems, logic circuits, microprocessors and data buses.',                          category: 'B1.1, B1.2, B2' },
  { code: 'M6',   name: 'M6 Materials & Hardware',                                     description: 'Aircraft materials, fasteners, pipes, springs and bearings.',                              category: 'B1.1, B1.2' },
  { code: 'M7',   name: 'M7 Maintenance Practices',                                    description: 'Safety procedures, tools, avionics and electrical general test equipment.',                category: 'B1.1, B1.2' },
  { code: 'M8',   name: 'M8 Basic Aerodynamics',                                       description: 'Physics of the atmosphere, aerodynamics, flight theory and stability.',                    category: 'B1.1, B1.2, B2' },
  { code: 'M9',   name: 'M9 Human Factors',                                            description: 'Human performance and limitations, social psychology and crew resource management.',       category: 'B1.1, B1.2, B2' },
  { code: 'M10',  name: 'M10 Aviation Legislation',                                    description: 'Regulatory framework, airworthiness, EASA Part-66 and Part-147.',                         category: 'B1.1, B1.2, B2' },
  { code: 'M11A', name: 'M11A Turbine Aeroplane Aerodynamics, Structures & Systems',   description: 'Turbine aeroplane theory, structures, airframe systems and powerplant.',                  category: 'B1.1' },
  { code: 'M15',  name: 'M15 Gas Turbine Engine',                                      description: 'Fundamentals, engine performance, inlet, compressor, combustion and turbine sections.',   category: 'B1.1, B1.3' },
  { code: 'M17',  name: 'M17 Propeller',                                               description: 'Propeller construction, pitch control, synchronising and ice protection.',                 category: 'B1.2' },
]

async function main() {
  // Admin user
  const hash = await bcrypt.hash('admin123', 12)
  const admin = await prisma.adminUser.upsert({
    where: { email: 'admin@aviatech.com' },
    update: {},
    create: { email: 'admin@aviatech.com', password: hash, name: 'Admin' },
  })
  console.log(`✓ Admin: ${admin.email} / admin123`)

  // Training modules
  for (const mod of modules) {
    await prisma.trainingModule.upsert({
      where: { code: mod.code },
      update: { name: mod.name, description: mod.description, category: mod.category },
      create: { ...mod, active: true },
    })
  }
  console.log(`✓ Seeded ${modules.length} training modules`)
}

main().catch(console.error).finally(() => prisma.$disconnect())
