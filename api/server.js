const express = require('express')
const cors = require('CORS')

const server = express()

// import routers
const projectRouter = require('./routes/project/project-router')

server.use(express.json())
server.use(cors())

// err middleware
server.use((err, req, res, next) => {
  console.error(err)
  next()
})

// init routers
server.use('/projects', projectRouter)

module.exports = server