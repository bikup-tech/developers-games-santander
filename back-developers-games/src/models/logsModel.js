const { Schema, model } = require('mongoose');

const logsModel = new Schema({
  data: { type: Object },
  date: { type: String },
});

module.exports = model('Log', logsModel);
