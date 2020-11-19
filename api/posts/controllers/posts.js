'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
var geoip = require('geoip-lite');
module.exports = {
  async users(ctx) {
    var ip = ctx.req.connection.remoteAddress;
    var geo = geoip.lookup(ip);
    console.log(ip+'Location:'+geo);
    return ctx.send(geo);
  }
};