/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class LocationController {
  /**
   * Update location details.
   * PUT or PATCH locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const data = request.only(['x', 'y']);

    const user = await User.findOrFail(params.users_id);
    const location = await user.location().fetch();

    location.merge(data);

    await location.save();

    return location;
  }
}

module.exports = LocationController;
