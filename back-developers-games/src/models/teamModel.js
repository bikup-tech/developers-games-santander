const { Schema, model } = require('mongoose');

const teamModel = new Schema({
  name: { type: String },
  solvedChallenges: { type: Number },
  participants: [{ type: Schema.Types.ObjectId, ref: 'Participants' }],
});

module.exports = model('Teams', teamModel);
