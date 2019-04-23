/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class FlagController {
  async store({ params }) {
    const user = await User.findOrFail(params.users_id);

    user.flags += 1;
    await user.save();

    return user;
  }
}

module.exports = FlagController;
