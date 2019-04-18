/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class LocationSchema extends Schema {
  up() {
    this.create('locations', (table) => {
      table.increments();
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('users.id');
      table.float('x').notNullable();
      table.float('y').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('locations');
  }
}

module.exports = LocationSchema;
