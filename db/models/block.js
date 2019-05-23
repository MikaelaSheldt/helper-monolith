const Sequelize = require('sequelize')
const db = require('../database')

const Block = db.define('block',
  {
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    expectedDuration: Sequelize.STRING,
    priority: {
      type: Sequelize.STRING,
      validate: {
        isIn: [['high', 'medium', 'low']]
      }
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'active',
      validate: {
        isIn: [['active', 'paused', 'retired']]
      }
    },
    mutable: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    morning: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    day: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    night: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    recover: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    defaultScope: {
      where: {
        status: 'active',
        mutable: true
      }
    },
    scopes: {
      weekend: {
        where: {
          category: 'weekend'
        }
      },
      weekday: {
        where: {
          category: 'weekday'
        }
      },
      timeAvailable: function(minutes) {
        return{
          where: {
            expectedDuration: {
              [Op.lte]: minutes
            }
          }
        }
      }
    }
  }
)

module.exports = Block
