'use strict'

const debug = require('debug')('mod:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const db = require('mod-db')
//const request = require('request-promise-native')
var bodyParser = require('body-parser')

const multipart = require('connect-multiparty')
const md_upload = multipart({ uploadDir: './uploads/product'})

const fs = require('fs')
const path = require('path')
//


const config = require('./config')

const api = asyncify(express.Router())

//parseado a json todos los bodys
api.use(bodyParser.urlencoded({extended:false}))
api.use(bodyParser.json())

let services, Gps

api.use('*', async (req, res, next) => {
  if (!services) {
    debug('Connecting to database')
    try {
      services = await db(config.db)
    } catch (e) {
      return next(e)
    }

    Gps = services.Gps
    
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

// USUARIOS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

api.get('/gpsFindAll',async (req,res)=>{
  //añade un nuevo usuario
      
  const Objeto = await Gps.findAll()
     
  res.send(Objeto)
  
})

api.get('/gpsFindLast',async (req,res)=>{
  //añade un nuevo usuario
      
  const Objeto = await Gps.findLast()
     
  res.send(Objeto)
  
})


module.exports = api
