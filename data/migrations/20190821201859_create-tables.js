
exports.up = function(knex) {
  knex.schema.createTable('users', tbl => {
      tbl.increments('id');
      tbl.string('username', 128)
      .notNullable()
      .unique();
      tbl.string('password', 128)
      .notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('users');
};
