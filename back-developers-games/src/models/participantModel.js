const { Schema, model } = require('mongoose');

const participantModel = new Schema({
  isCaptain: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  email: { type: String },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  phone: { type: String },
  teamNumber: { type: Number },
});

module.exports = model('Participants', participantModel);
