
exports.up = function(knex) {
    return knex.schema.createTable('Students', (table) => {
        table.increments('id')
        table.string('name')
        table.integer('age')
        table.string('hairColor')
    })
};



exports.down = function(knex) {
  return knex.schema.raw('DROP TABLE Students')
};

