const { Schema, model } = require('mongoose');

const tournamentChallengeModel = new Schema({
  number: { type: Number },
  name: { type: String },
  title: { type: String },
  subtitle: { type: String },
  mentor: { type: String },
  description: { type: String },
  bonus: { type: String },
  duration: [{
    level: { type: String },
    duration: { type: Number },
  }],
  technologies: [{ type: String }],
  hints: { type: String },
  notes: { type: String },
  video: { type: String },
  tournamentId: { type: String },
});

module.exports = model('Tournament_challenges', tournamentChallengeModel);
