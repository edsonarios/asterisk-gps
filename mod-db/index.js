'use strict'

const setupDatabase = require('./lib/db')

const setupGps = require('./lib/gps')

const defaults = require('defaults')

const setupGpsModel = require('./models/gps')




module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)

  
  const GpsModel = setupGpsModel(config)
  

  
  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  
  const Gps = setupGps(GpsModel)
    

  return {
  
    Gps
  
  }
}
