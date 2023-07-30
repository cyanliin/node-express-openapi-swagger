const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RESTful API',
      description: "This is a example api doc.",
    },
    basePath: '/',
    servers: [
      {
        url: 'http://localhost:3301',
      },
    ],
  },
  apis: [
    "routers/user.js"
  ]
}

module.exports = swaggerOptions;