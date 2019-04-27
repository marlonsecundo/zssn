const Antl = use('Antl');

class BarterStore {
  get rules() {
    return {
      bags: 'required|array|min:2|max:2|notEmptyBags|equivalentBags',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = BarterStore;
