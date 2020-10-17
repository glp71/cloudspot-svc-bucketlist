'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * @swagger
 *  components:
 *    schemas:
 *      Hero:
 *        type: object
 *        required:
 *          - name
 *          - id
 *        properties:
 *          name:
 *            type: string
 *            description: Name of the hero
 *          id:
 *            type: Number
 *            description: Identifier of the hero
 *        example:
 *           name: Hero Number 1
 *           email: 1
 */
var HeroSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  id: {
    type: Number,
    required: 'Missing mandatory parameter "id"'
  }  
});

module.exports = mongoose.model('Heroes', HeroSchema);