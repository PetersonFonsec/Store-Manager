
exports.up = function(knex) {
  return knex.schema.createTable('produtos_vendidos', table => {
      table.foreign('venda_id').references('vendas.id')
      table.foreign('produto.id').references('produtos.id')
      table.float('quantidade').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos_vendidos')
};
