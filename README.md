# node-express-openapi-swagger
RESTful API with Express, Swagger, OpenAPI

- OpenAPI 3.0
- API Definition write above function in same js file. (in /routers/*.js)

``` js
// /routers/user.js

...

/**
 * @openapi
 * /user/{userId}:
 *  get:
 *    tags:
 *      - User
 *    summary: Get a user data
 *    description: Get a user data by id
 *    parameters: 
 *    - in: path
 *      name: userId
 *      schema:
 *        type: integer
 *      required: true
 *      description: Numeric ID of the user to get
 *    responses:
 *      '200': 
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  format: uuid
 *                  example: 123e4567-e89b-12d3-a456-426655440000
 *                name:
 *                  type: string
 *                  example: John Doe
 *                email:
 *                  type: string
 *                  format: email
 *                  example: john.doe@example.com
 *                age:
 *                  type: integer
 *                  format: int32
 *                  example: 30
 *      '400':
 *        description: Bad request. User ID must be an integer and larger than 0.
 *      '401':
 *        description: Authorization information is missing or invalid.
 *      '404':
 *        description: A user with the specified ID was not found.
 *      '5XX':
 *        description: Unexpected error.
 */
userApi.get('/', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('user info is ' + JSON.stringify(user))
})

...
```
## API Doc
```
http://localhost:3301/api-docs/
```

## WIP notes:
- schemas need be seperated into different files. Currently, there's basePath issue need to fix.