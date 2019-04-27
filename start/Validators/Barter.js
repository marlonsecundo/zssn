/* eslint-disable import/prefer-default-export */
const Antl = use('Antl');
const Validator = use('Validator');
const Barter = use('App/Utils/Barter');

// Not Empty Bags
const notEmptyBags = async (data, field, message, args, get) => {
  const bags = get(data, field);
  const { equivalence } = Barter;

  bags.map((item) => {
    const bagProps = Object.keys(item);

    bagProps.every((prop) => {
      if (prop === 'userId') return true;

      if (!equivalence[prop]) throw Antl.formatMessage('validation.valid_prop_bag');
      else if (item[prop] <= 0) throw Antl.formatMessage('validation.not_empty_bag');

      return prop;
    });

    return item;
  });
};

// Equivalent Validator
const equivalentBags = async (data, field, message, args, get) => {
  const bags = get(data, field);
  const { equivalence } = Barter;

  const scores = [0, 0];

  bags.map((item, index) => {
    const bagProps = Object.keys(item);

    bagProps.map((prop) => {
      if (prop === 'userId') return prop;

      scores[index] += item[prop] * equivalence[prop];

      return prop;
    });

    return item;
  });

  if (scores[0] !== scores[1]) throw Antl.formatMessage('validation.fair_trade');
};

const loadBarterValidators = () => {
  Validator.extend('notEmptyBags', notEmptyBags);
  Validator.extend('equivalentBags', equivalentBags);
};

module.exports = loadBarterValidators;
