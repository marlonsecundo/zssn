/* eslint-disable camelcase */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Bag = use('App/Models/Bag');

class BagController {
  async index() {
    const bags = await Bag.all();

    return bags;
  }

  async show({ params }) {
    const { users_id: user_id, id } = params;

    const bag = await Bag.findByOrFail({ user_id, id });

    await bag.loadMany(['user']);

    return bag;
  }

  async update({ params, request }) {
    const { users_id: user_id, id } = params;
    const data = request.only(['water', 'food', 'ammo', 'medicine']);

    const bag = await Bag.findByOrFail({ user_id, id });

    bag.merge(data);

    await bag.save();

    return bag;
  }
}

module.exports = BagController;
