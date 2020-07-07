const express = require('express')
const db = require('./project-model')

const project = express.Router()

project.get('/', (req, res, next) => {
  db.find()
  .then(projects => res.status(200).json(projects))
  .catch(err => next(err))
})

//

module.exports = project