
exports.up = function(knex) {
  return knex.schema.createTable('compras', table =>{
    table.increments('id').primary()
    table.foreign('fornecedor_id').references('fornecedores.id')
    table.timestamp('data').defaultTo(knex.fn.now())
    table.float('total').notNull()
    table.string('forma_pagamento').notNull()
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('compras')
};
