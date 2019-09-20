
exports.up = function(knex) {
  return knex.schema.createTable('fornecedores', table => {
    table.increments('id').primary()
    table.string('cnpj', 14).notNull().unique()
    table.string('nome_fantasia')
    table.string('razao_social')
    table.string('contato').notNull()
    table.string('telefone')
    table.string('celular')
    table.string('email').unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('fornecedores')
};
