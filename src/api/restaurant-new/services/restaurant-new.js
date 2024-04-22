'use strict';

/**
 * restaurant-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-new.restaurant-new');
