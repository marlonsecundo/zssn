/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table
        .string('name', 80)
        .notNullable()
        .unique();
      table.date('birth').notNullable();
      table.string('sex', 60).notNullable();
      table
        .string('location', 255)
        .notNullable()
        .unique();
      table
        .integer('flags')
        .notNullable()
        .unsigned()
        .defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
