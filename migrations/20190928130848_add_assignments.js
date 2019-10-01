
exports.up = function(knex) {
    return knex.schema.createTable('Assignments', (table) => {
        table.increments('id')
        table.string('title')
        table.boolean('isFinished')
        table.integer('studentId')
        table.foreign('studentId').references('Student.id')
    })
};


exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE Assignments')
  
};
