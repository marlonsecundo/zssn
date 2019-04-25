const Antl = use('Antl');

class UserStore {
  get rules() {
    return {
      name: 'required|string',
      sex: 'required|in:M,F',
      birth: 'required|date',
      'location.x': 'required|number',
      'location.y': 'required|number',
    };
  }

  get validateAll() {
    return true;
  }

  get sanitizationRules() {
    return {
      birth: 'toDate',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = UserStore;
