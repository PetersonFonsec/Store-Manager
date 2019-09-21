
exports.up = function(knex) {
  return knex.schema.createTable('produtos_vendidos', table => {
    table.integer('venda_id').unsigned()
    table.integer('produto_id').unsigned()

    table.foreign('venda_id').references('vendas.id')
    table.foreign('produto_id').references('produtos.id')
    
    table.float('quantidade').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos_vendidos')
};
