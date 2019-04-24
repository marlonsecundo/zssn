/* eslint-disable no-param-reassign */
const properties = ['water', 'food', 'medicine', 'ammo'];

const Barber = {
  equivalence: {
    water: 4,
    food: 3,
    medicine: 2,
    ammo: 1,
  },
  properties,
  defaultBag: properties.reduce((prev, current, index) => {
    prev[properties[index]] = 0;
    return prev;
  }, {}),
};

module.exports = Barber;
