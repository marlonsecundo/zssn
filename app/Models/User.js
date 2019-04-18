/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  static boot() {
    super.boot();
  }

  bag() {
    return this.hasOne('App/Models/Bag');
  }
}

module.exports = User;
