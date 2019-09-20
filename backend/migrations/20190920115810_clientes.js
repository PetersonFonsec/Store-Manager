
exports.up = function(knex) {
  return knex.schema.createTable('clientes', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('telefone')
    table.string('celular')
    table.string('email').unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clientes')
};
