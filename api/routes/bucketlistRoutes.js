'use strict';
module.exports = function(app) {
  var bucketlist = require('../controllers/bucketlistController');

 /**
 * @swagger
 * path:
 *  /heroes/:
 *    get:
 *      summary: Get all users, or find by name
 *      tags: [Heroes]
 *      parameters:
 *        - in: path
 *          name: Name search string
 *          schema:
 *          type: string
 *          required: false
 *          description: Part of a hero name to search for. The method will return all heroes with a matching name
 *      responses:
 *        "200":
 *          description: List of all (matching) hero objects
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Hero'
 */
  app.route('/heroes')
    .get(bucketlist.list_all_heroes)
    .put(bucketlist.update_a_hero) // id of hero to be updated will be taken from the body
    .post(bucketlist.create_a_hero);


 /**
 * @swagger
 * path:
 *  /heroes/{heroId}:
 *    get:
 *      summary: Get a user by id
 *      tags: [Heroes]
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the user
 *      responses:
 *        "200":
 *          description: An users object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Hero'
 */
app.route('/heroes/:heroId')
    .get(bucketlist.read_a_hero)
    .delete(bucketlist.delete_a_hero);
};