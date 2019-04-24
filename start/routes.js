/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// Users
Route.resource('users', 'UserController').only(['show', 'index', 'store']);

// Location
Route.resource('users.locations', 'LocationController').only(['update']);

// Flag
Route.post('users/:users_id/flags', 'FlagController.store');

// Bags
Route.resource('users.bags', 'BagController').only(['index', 'show', 'update']);

// Barter
Route.post('baters', 'BarterController.store');
