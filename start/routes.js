/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.resource('users', 'UserController').only(['show', 'index', 'store']);
Route.resource('users.locations', 'LocationController').only(['update']);
