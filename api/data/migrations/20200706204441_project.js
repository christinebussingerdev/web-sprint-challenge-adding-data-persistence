exports.up = function(knex) {
  return knex.schema.createTable('project',tbl => {
    tbl.increments()
    tbl.string('name').notNullable()
    tbl.string('description')
    tbl.bool('completed').defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project')
};
