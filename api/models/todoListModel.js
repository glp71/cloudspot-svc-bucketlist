'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var conn = mongoose.createConnection('mongodb+srv://test:test4now@cluster0.4d1s3.mongodb.net/tutorial?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }); 
module.exports = conn.model('Tasks', TaskSchema);