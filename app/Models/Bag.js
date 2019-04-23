/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Bag extends Model {
  user() {
    this.belongsTo('App/Models/User');
  }
}

module.exports = Bag;
