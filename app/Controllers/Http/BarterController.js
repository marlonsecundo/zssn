/* eslint-disable no-const-assign */
const Bag = use('App/Models/Bag');

class BarterController {
  async store({ request }) {
    const bags = request.input('bags');

    const { user_id: user1, ...bag1 } = bags[0];
    const { user_id: user2, ...bag2 } = bags[1];

    const userBag1 = await Bag.findByOrFail({ user_id: user1 });
    const userBag2 = await Bag.findByOrFail({ user_id: user2 });

    Object.keys(bag1).map((prop) => {
      userBag1[prop] -= bag1[prop];
      userBag2[prop] += bag1[prop];

      return prop;
    });

    Object.keys(bag2).map((prop) => {
      userBag1[prop] += bag2[prop];
      userBag2[prop] -= bag2[prop];

      return prop;
    });

    await userBag1.save();
    await userBag2.save();
  }
}

module.exports = BarterController;
