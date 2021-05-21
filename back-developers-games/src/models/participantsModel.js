const { Schema, model } = require('mongoose');

const participantsModel = new Schema({
  isCaptain: { type: Boolean },
  isAdmin: { type: Boolean },
  email: { type: String },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  phone: { type: String },
});

module.exports = model('Participants', participantsModel);
