'use strict'

const db = require('./index')
const {Block} = require('./models')

const blocks = [
  {
    description: 'practice algorithms',
    duration: 45,
    priority: 1,
    status: 'active',
    mutable: true,
    morning: true,
    night: true,
  },
  {
    description: 'practice pitch',
    duration: 30,
    priority: 2,
    status: 'active',
    mutable: true,
    morning: true,
    night: true,
  },
  {
    description: 'write letters',
    duration: 45,
    priority: 3,
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
