
exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments()
    tbl.string('name').notNullable().unique()
    tbl.string('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
};
