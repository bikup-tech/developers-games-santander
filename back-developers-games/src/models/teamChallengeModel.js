const { Schema, model } = require('mongoose');

const teamChallengeModel = new Schema({
  tournamentChallengeId: { type: String, ref: 'Tournament_challenges' },
  isCompleted: { type: Boolean, default: false },
  deliverable: { type: String, default: '' },
});

module.exports = model('Team_challenges', teamChallengeModel);
