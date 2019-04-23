/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class FlagController {
  async store({ params, request }) {
    const userFlaged = await User.findOrFail(request.input('userId'));

    const data = [...userFlaged.flags, Number(params.users_id)];
    userFlaged.flags = [...new Set(data)];

    await userFlaged.save();
    return userFlaged;
  }
}

module.exports = FlagController;
