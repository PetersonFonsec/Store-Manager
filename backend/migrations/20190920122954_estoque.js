
exports.up = function(knex) {
   return knex.schema.createTable('estoque', table => {
      table.integer('produto_id').unsigned()
      table.foreign('produto_id').references('produtos.id')
      table.integer('quantidade').notNull().default(0)
   })
};

exports.down = function(knex) {
  return knex.schema.dropTable('estoque')
};
