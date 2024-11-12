const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentID: String,
  name: String,
  subject: String,
  marks: Number
});

module.exports = mongoose.model('Result', resultSchema);
