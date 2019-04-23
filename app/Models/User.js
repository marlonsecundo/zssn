/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  static boot() {
    super.boot();
  }

  static get computed() {
    return ['infected'];
  }

  bag() {
    return this.hasOne('App/Models/Bag');
  }

  location() {
    return this.hasOne('App/Models/Location');
  }

  getInfected({ flags }) {
    return flags >= 3;
  }
}

module.exports = User;
