const chalk = require('chalk')
const Sequelize = require('sequelize')

console.log(chalk.yellow('Opening database connection'))

const db = new Sequelize('postgres://localhost:5432/helper', {
  logging: false
});

module.exports = db
