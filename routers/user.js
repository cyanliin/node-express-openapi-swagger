const express = require('express')
const bodyParser = require('body-parser')

var userApi = express.Router();
userApi.use(bodyParser.text({type: '*/*'}))

/**
 * @openapi
 * /user/{userId}:
 *  get:
 *    tags: [User Management]
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


/**
 * @openapi
 * /user:
 *  post:
 *    tags: [User Management]
 *    summary: Add a user
 *    description: Add a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *            schema:
 *              type: object
 *              properties:
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
 *              required:
 *                - name
 *                - email
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
 */
userApi.post('/', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('get user data, user name is ' + user.name)
})

userApi.put('/', (req, res) => {
  var user = JSON.parse(req.body)
  user.age += 1
  res.send('return user info is ' + JSON.stringify(user))
})

userApi.delete('/', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('user is deleted : ' + user.name)
})

module.exports = userApi;