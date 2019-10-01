
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Students').del()
    .then(function () {
      // Inserts seed entries
      return knex('Students').insert([
        {name: 'Joey', hairColor: 'brown'},
        {name: 'Aubrey', hairColor: 'brown'},
        {name: 'Albin', hairColor: 'black'}
      ]);
    });
};
