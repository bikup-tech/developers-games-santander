const { Schema, model } = require('mongoose');

const logsModel = new Schema({
  data: { type: Object },
});

module.exports = model('Log', logsModel);
