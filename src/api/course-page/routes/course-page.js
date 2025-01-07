module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/course-pages/:slug',
        handler: 'course-page.findOne',
        config: {
          auth: false, // Set to true if authentication is required
        },
      },
    ],
  };
  