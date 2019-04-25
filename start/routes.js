/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// Users
Route.resource('users', 'UserController')
  .only(['show', 'index', 'store'])
  .validator(new Map([[['users.store'], ['User/Store']]]));

// Location
Route.resource('users.locations', 'LocationController')
  .only(['update'])
  .validator(new Map([[['users.locations.update'], ['Location/Update']]]));

// Flag
Route.post('users/:users_id/flags', 'FlagController.store');

// Bags
Route.resource('users.bags', 'BagController')
  .only(['index', 'show', 'update'])
  .validator(new Map([[['users.bags.update'], ['Bag/Update']]]));

// Barter
Route.post('barters', 'BarterController.store');
