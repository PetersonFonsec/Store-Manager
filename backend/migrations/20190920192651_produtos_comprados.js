
exports.up = function(knex) {
    return knex.schema.createTable('produtos_comprados', table => {
        table.foreign('compra_id').references('compras.id')
        table.foreign('produto.id').references('produtos.id')
        table.float('quantidade').notNull()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produtos_comprados')
  };
  