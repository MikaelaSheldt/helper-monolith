'use strict'

const db = require('./index')
const {Block} = require('./models')

const blocks = [
  {
    description: 'practice algorithms',
    expectedDuration: 45,
    priority: 'high',
    status: 'active',
    mutable: true,
    morning: true,
    night: true,
  },
  {
    description: 'practice pitch',
    expectedDuration: 30,
    priority: 'medium',
    status: 'active',
    mutable: true,
    morning: true,
    night: true,
  },
  {
    description: 'write letters',
    expectedDuration: 45,
    priority: 'low',
    status: 'active',
    mutable: true,
    recover: true,
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('DATABASE synced!')

  await Block.bulkCreate(blocks)

  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()
