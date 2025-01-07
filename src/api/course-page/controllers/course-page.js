'use strict';

/**
 * course-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course-page.course-page', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    // Ensure slug is provided
    if (!slug) {
      return ctx.badRequest('Slug parameter is required');
    }

    try {
      // Query the database for a course page with the given slug
      const coursePage = await strapi.entityService.findMany('api::course-page.course-page', {
        filters: { slug },
        populate: '*', // Populate all fields
        limit: 1, // Only one result needed
      });

      // Check if a course page is found
      if (!coursePage || coursePage.length === 0) {
        return ctx.notFound('Course Page not found');
      }

      // Return the first result
      return ctx.send({
        data: coursePage[0],
      });
    } catch (err) {
      strapi.log.error(err); // Log the error for debugging
      return ctx.internalServerError('An error occurred while fetching the Course Page');
    }
  },
}));
