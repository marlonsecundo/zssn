const Antl = use('Antl');
class LocationUpdate {
  get rules() {
    return {
      x: 'required|number',
      y: 'required|number',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = LocationUpdate;
