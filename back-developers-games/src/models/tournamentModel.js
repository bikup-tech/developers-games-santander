const { Schema, model } = require('mongoose');

const tournamentModel = new Schema({
  name: { type: String },
  client: { type: String },
  clientLogo: { type: String },
  teams: [{ type: Schema.Types.ObjectId, ref: 'Teams' }],
  tournamentChallenges: [{ type: Schema.Types.ObjectId, ref: 'Challenges' }],
});

module.exports = model('Tournaments', tournamentModel);
