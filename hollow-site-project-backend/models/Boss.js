const mongoose = require('mongoose');

// structure for the data that will create the documents on our mongo database in Atlas
const BossSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters']
  },
  area: {
    type: String,
    required: [true, 'must provide area'],
    trim: true,
    maxlength: [50, 'area cannot be than 50 characters']
  },
  health: {
    type: Number,
    min: [500, "boss life isn't less than 500"],
    max: [1800, "boss life isn't greater than 1800"]
  }
});

// the mongoose model provides an interface for the database
module.exports = mongoose.model('Boss', BossSchema);