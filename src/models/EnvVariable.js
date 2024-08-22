
const mongoose = require('mongoose');

const envVariableSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
  scope: { type: String, enum: ['global', 'user'], default: 'user' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: function() { return this.scope === 'user'; } }
});

module.exports = mongoose.model('EnvVariable', envVariableSchema);