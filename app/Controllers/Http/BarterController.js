/* eslint-disable no-const-assign */
const Bag = use('App/Models/Bag');
const Barter = use('App/Utils/Barter');

class BarterController {
  async store({ request }) {
    const bags = request.input('bags');

    const { user_id: user1, ...reqBag1 } = bags[0];
    const { user_id: user2, ...reqBag2 } = bags[1];

    const bag1 = { ...Barter.defaultBag, ...reqBag1 };
    const bag2 = { ...Barter.defaultBag, ...reqBag2 };

    const userBag1 = await Bag.findByOrFail({ user_id: user1 });
    const userBag2 = await Bag.findByOrFail({ user_id: user2 });

    Barter.properties.map((prop) => {
      userBag1[prop] -= bag1[prop];
      userBag1[prop] += bag2[prop];

      userBag2[prop] += bag1[prop];
      userBag2[prop] -= bag2[prop];
      return prop;
    });

    await userBag1.save();
    await userBag2.save();
  }
}

module.exports = BarterController;
