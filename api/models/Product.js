const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  price: Sequelize.DECIMAL
})