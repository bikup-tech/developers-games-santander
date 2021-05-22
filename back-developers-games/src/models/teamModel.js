const { Schema, model } = require('mongoose');

const teamModel = new Schema({
  name: { type: String },
  solvedChallenges: { type: Number, default: 0 },
  participants: [{ type: Schema.Types.ObjectId, ref: 'Participants' }],
  teamChallenges: [{ type: Schema.Types.ObjectId, ref: 'Team_challenges' }],
});

module.exports = model('Teams', teamModel);
