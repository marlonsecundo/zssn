/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BagSchema extends Schema {
  up() {
    this.create('bags', (table) => {
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('users.id');
      table
        .integer('water')
        .notNullable()
        .defaultTo(0);
      table
        .integer('food')
        .notNullable()
        .defaultTo(0);
      table
        .integer('medicine')
        .notNullable()
        .defaultTo(0);
      table
        .integer('ammo')
        .notNullable()
        .defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop('bags');
  }
}

module.exports = BagSchema;
