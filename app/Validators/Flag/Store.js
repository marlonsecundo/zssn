const Antl = use('Antl');

class FlagStore {
  get rules() {
    return {
      userId: 'required|integer|above:0',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = FlagStore;
