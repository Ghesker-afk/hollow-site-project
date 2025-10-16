const mongoose = require('mongoose');

// structure for the data that will create the documents on our mongo database in Atlas
const BossSchema = new mongoose.Schema({
  name: String,
  area: String,
  health: Number
});

// the mongoose model provides an interface for the database
module.exports = mongoose.model('Boss', BossSchema);