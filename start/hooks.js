/* eslint-disable global-require */
const { hooks } = require('@adonisjs/ignitor');

hooks.before.httpServer(() => {
  const loadBarterValidators = require('./Validators/Barter');
  loadBarterValidators();
});
