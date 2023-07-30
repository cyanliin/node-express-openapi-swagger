const express = require('express')
const bodyParser = require('body-parser')

var userApi = express.Router();
userApi.use(bodyParser.text({type: '*/*'}))

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
 *                  description: ID
 *                name:
 *                  type: string
 *                  example: John Doe
 *                  description: Name
 *                email:
 *                  type: string
 *                  format: email
 *                  example: john.doe@example.com
 *                  description: E-mail
 *                age:
 *                  type: integer
 *                  format: int32
 *                  example: 30
 *                  description: Age
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
 *    tags:
 *      - User
 *    summary: Add a user
 *    description: Add user
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
 *                  description: Name
 *                email:
 *                  type: string
 *                  format: email
 *                  example: john.doe@example.com
 *                  description: E-mail
 *                age:
 *                  type: integer
 *                  format: int32
 *                  example: 30
 *                  description: Age
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
 *                  description: ID
 *                name:
 *                  type: string
 *                  example: John Doe
 *                  description: Name
 *                email:
 *                  type: string
 *                  format: email
 *                  example: john.doe@example.com
 *                  description: E-mail
 *                age:
 *                  type: integer
 *                  format: int32
 *                  example: 30
 *                  description: Age
 */
userApi.post('/', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('get user data, user name is ' + user.name)
})


/**
 * @openapi
 * /user/{userId}:
 *  put:
 *    tags:
 *      - User
 *    summary: Update user data
 *    description: Endpoint to update user data with the provided data.
 *    operationId: updateUser
 *    parameters:
 *      - name: userId
 *        in: path
 *        description: ID of the user to update
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    requestBody:
 *      description: User data to be updated
 *      required: true
 *      content:
 *        application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: John Doe
 *                  description: Name
 *                email:
 *                  type: string
 *                  format: email
 *                  example: john.doe@example.com
 *                  description: E-mail
 *                age:
 *                  type: integer
 *                  format: int32
 *                  example: 30
 *                  description: Age
 *              required:
 *                - name
 *                - email
 *    responses:
 *      '200':
 *        description: User updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  format: uuid
 *                  example: 123e4567-e89b-12d3-a456-426655440000
 *                  description: ID
 *                name:
 *                  type: string
 *                  example: John Doe
 *                  description: Name
 *                email:
 *                  type: string
 *                  format: email
 *                  example: john.doe@example.com
 *                  description: E-mail
 *                age:
 *                  type: integer
 *                  format: int32
 *                  example: 30
 *                  description: Age
 *      '400':
 *        description: Bad request - Invalid input data
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Internal Server Error
 */
userApi.put('/', (req, res) => {
  var user = JSON.parse(req.body)
  user.age += 1
  res.send('return user info is ' + JSON.stringify(user))
})


/**
 * @openapi
 * /user/{userId}:
 *  delete:
 *    tags:
 *      - User
 *    summary: Delete user
 *    description: Endpoint to delete a user by ID.
 *    operationId: deleteUser
 *    parameters:
 *      - name: userId
 *        in: path
 *        description: ID of the user to delete
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      '204':
 *        description: User deleted successfully
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Internal Server Error
 */
userApi.delete('/', (req, res) => {
  var user = JSON.parse(req.body)
  res.send('user is deleted : ' + user.name)
})

module.exports = userApi;