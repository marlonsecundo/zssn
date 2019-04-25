const Antl = use('Antl');

class BagUpdate {
  get rules() {
    return {
      water: 'integer|above:0',
      food: 'integer|above:0',
      ammo: 'integer|above:0',
      medicine: 'integer|above:0',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = BagUpdate;
