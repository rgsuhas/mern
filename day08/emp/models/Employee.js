const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  gender: String,
  dept: String,
  location: String
});

module.exports = mongoose.model('Employee', employeeSchema);