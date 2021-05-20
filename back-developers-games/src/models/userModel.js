const { Schema, model } = require('mongoose');

const userModel = new Schema({
  email: { type: String },
  password: { type: String },
  username: { type: String },
});

module.exports = model('User', userModel);
