const Sequelize = require('sequelize')
const config = require('./config')

module.exports = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  define: {
    timestamps: false,
    freezeTableName: true
  }
})