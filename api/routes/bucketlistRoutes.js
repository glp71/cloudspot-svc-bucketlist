'use strict';
module.exports = function(app) {
  var bucketlist = require('../controllers/bucketlistController');

  // todoList Routes
  app.route('/heroes')
    .get(bucketlist.list_all_heroes)
    .put(bucketlist.update_a_hero) // id of hero to be updated will be taken from the body
    .post(bucketlist.create_a_hero);


  app.route('/heroes/:heroId')
    .get(bucketlist.read_a_hero)
    .delete(bucketlist.delete_a_hero);
};