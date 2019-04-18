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
      table.enu('sex', ['M', 'F']).notNullable();
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
