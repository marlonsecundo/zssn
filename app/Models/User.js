/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  static boot() {
    super.boot();
  }

  static get computed() {
    return ['infected'];
  }

  getInfected({ flags }) {
    if (!flags) return false;

    return flags.length >= 3;
  }

  bag() {
    return this.hasOne('App/Models/Bag');
  }

  location() {
    return this.hasOne('App/Models/Location');
  }
}

module.exports = User;
