'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGpsModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('gps', {
    direccion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    coordenadas: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },{
    timestamps:false
    
  })
}
