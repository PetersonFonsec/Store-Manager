
exports.up = function(knex) {
  return knex.schema.createTable('vendas', table => {
    table.increments('id').primary()
    table.timestamp('data').defaultTo(knex.fn.now())
    table.float('total').notNull()
    table.string('forma_pagamento').notNull()
    table.integer('cliente_id').unsigned()
    table.foreign('cliente_id').references('clientes.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendas')
};
