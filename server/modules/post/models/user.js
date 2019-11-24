// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const { Schema, model }  = require('mongoose');

// #2 Instantiate a schema using mongoose Schema
const userSchema = new Schema({
  name: {
  	type: String,
  	required: true
  },
  init: {
  	type: String,
  	required: true
  },
  email: {
  	type: String,
  	required: true
  },
  password: {
  	type: String,
  	required: true
  },
  created: {
  	type: Date,
  	default: Date.now
  },
  login: {
  	type: Date,
  	default: Date.now
  },
  access: {
  	type: Date,
  	default: Date.now
  },
  status: {
  	type: Number,
  	default: 0
  }
});

// #3 Create a model with mongoose model() method
const User = model('user', userSchema);

module.exports = User;