/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BagSchema extends Schema {
  up() {
    this.create('bags', (table) => {
      table.increments();
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .unique()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
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
      table.boolean('accessible').defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop('bags');
  }
}

module.exports = BagSchema;
