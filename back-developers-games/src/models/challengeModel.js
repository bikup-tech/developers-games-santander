const { Schema, model } = require('mongoose');

const challengeModel = new Schema({
  name: { type: String },
  title: { type: String },
  subtitle: { type: String },
  isCompleted: { type: Boolean, default: false },
  mentor: { type: String },
  description: { type: String },
  bonus: { type: String },
  duration: { type: String }, // Este es un obj
  technologies: [{ type: String }],
  deliverable: { type: String },
  hints: { type: String },
  notes: { type: String },
  video: { type: String },
  tournamentId: { type: String },
});

module.exports = model('Challenges', challengeModel);
