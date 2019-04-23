/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('name', 80).notNullable();
      table.date('birth').notNullable();
      table.enu('sex', ['M', 'F']);
      table.specificType('flags', 'INT[]').defaultTo('{}');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
