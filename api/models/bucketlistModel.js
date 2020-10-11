'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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