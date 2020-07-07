const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
  return db('task')
}

// MIGHT NEED TO BE TWEAKED
function findById(id) {
  return db('task')
  .where('id', id)
  .first()
}

function add(projectId, newTask) {
  return db('task')
  .insert(newTask)
}

function update(id, newTask) {
  return db('task')
  .where('id', id)
  .update(newTask)
}

function remove(id) {
  return db('task')
  .where('id', id)
  .del()
}