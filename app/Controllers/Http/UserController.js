/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

const Database = use('Database');

class UserController {
  async index() {
    const users = await User.all();
    return users;
  }

  async show({ request }) {
    const user = await User.findOrFail(request.get().id);
    await user.loadMany(['bag', 'location']);
    return user;
  }

  async store({ request }) {
    const data = request.only(['name', 'birth', 'sex']);
    const location = request.input('location');
    const bag = request.input('bag');

    const trx = await Database.beginTransaction();

    const user = await User.create(data, trx);
    await user.location().create(location, trx);
    await user.bag().create(bag, trx);

    await trx.commit();
  }
}

module.exports = UserController;
