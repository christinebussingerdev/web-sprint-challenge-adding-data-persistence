const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find(projectId) {
  return db('task')
  .where('project_id', projectId)
}

// MIGHT NEED TO BE TWEAKED
function findById(projectId, id) {
  return db('task')
  .where('project_id', projectId)
  .where('id', id)
  .first()
}

function add(newTask) {
  return db('task')
  .insert(newTask)
}

function update(projectId, id, newTask) {
  return db('task')
  .where('project_id', projectId)
  .where('id', id)
  .update(newTask)
}

function remove(projectId, id) {
  return db('task')
  .where('id', id)
  .del()
}