const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const app = express()
const port = 3301

// Swagger Setup
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
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// API Routes
app.use('/user', require('./routers/user'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})