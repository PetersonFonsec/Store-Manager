
exports.up = function(knex) {
  return knex.schema.createTable('categorias', table => {
        table.increments('id').primary()    
        table.string('unidade_medida').notNull()
        table.string('nome').notNull().unique()        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categorias')
};
