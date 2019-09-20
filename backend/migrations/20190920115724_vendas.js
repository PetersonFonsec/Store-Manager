
exports.up = function(knex) {
  return knex.schema.createTable('vendas', table => {
    table.increments('id').primary()
    table.foreign('cliente_id').references('clientes.id')
    table.timestamp('data').defaultTo(knex.fn.now())
    table.float('total').notNull()
    table.string('forma_pagamento').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendas')
};
