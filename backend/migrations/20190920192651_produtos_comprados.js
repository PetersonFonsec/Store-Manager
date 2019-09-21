
exports.up = function(knex) {
    return knex.schema.createTable('produtos_comprados', table => {
      table.integer('compra_id').unsigned()
      table.integer('produto_id').unsigned()
      table.foreign('compra_id').references('compras.id')
      table.foreign('produto_id').references('produtos.id')
      table.float('quantidade').notNull()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produtos_comprados')
  };
  