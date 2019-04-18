/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
  async index() {
    const users = await User.query().with('bag');
    return users;
  }

  async show({ request }) {
    const user = await User.findOrFail(request.get().id);
    return user;
  }

  async store({ request }) {
    const data = request.only(['name', 'birth', 'sex']);
    const user = await User.create(request.only(['name']));
  }

  async update({ request }) {}

  async destroy({}) {}
}

module.exports = UserController;
