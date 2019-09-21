
exports.up = function(knex) {
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('descricao').notNull()
    table.float('preco_compra').notNull()
    table.float('preco_venda').notNull()
    table.integer('categoria_id').unsigned()
    table.foreign('categoria_id').references('categorias.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos')
};
