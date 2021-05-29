const { Schema, model } = require('mongoose');

const teamChallengeModel = new Schema({
  tournamentChallenge: { type: String, ref: 'Tournament_challenges' },
  teamId: { type: String },
  isCompleted: { type: Boolean, default: false },
  filename: { type: String },
  challengeName: { type: String },
  challengeNumber: { type: Number },
});

module.exports = model('Team_challenges', teamChallengeModel);
