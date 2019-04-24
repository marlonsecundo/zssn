const Bag = use('App/Models/Bag');
const Barter = use('App/Utils/Barter');

class BarterController {
  async store({ request }) {
    const bags = request.input('bags');

    const { user_id: user1, ...reqBag1 } = bags[0].user_id;
    const { user_id: user2, ...reqBag2 } = bags[1].user_id;

    const bag1 = await Bag.findByOrFail({ user_id: user1 });
    const bag2 = await Bag.findByOrFail({ user_id: user2 });

    Barter.properties.map((prop) => {
      bag1[prop] -= reqBag1[prop];
      bag2[prop] += reqBag2[prop];

      return null;
    });

    await bag1.save();
    await bag2.save();
  }
}

module.exports = BarterController;
