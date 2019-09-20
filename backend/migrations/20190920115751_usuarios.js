
exports.up = function(knex) {
  return knex.schema.createTable('usuario', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('senha').notNull()
    table.string('email').notNull().unique()
    table.boolean('ativo').notNull().defaultTo(true)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario')
};
