
exports.up = function(knex) {
  return knex.schema.createTable('task', tbl => {
    tbl.increments()
    tbl.int('project_id').references('id').inTable('project').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
    tbl.string('description').notNullable()
    tbl.string('notes')
    tbl.bool('completed').defaultTo(false)
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('task')
};
